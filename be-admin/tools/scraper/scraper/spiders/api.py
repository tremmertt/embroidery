import scrapy
import logging
import scrapy
import json
import re
import time
import os
import sys

file_dir = os.path.dirname(os.path.realpath(__file__))
root_dir = os.path.abspath(file_dir + "/..")
sys.path.append(os.path.normpath(root_dir))

from bs4 import BeautifulSoup
from django.utils import timezone
from urllib.parse import urlparse
from scrapy.linkextractors import LinkExtractor
from scrapy.spidermiddlewares.httperror import HttpError
from twisted.internet.error import DNSLookupError, TCPTimedOutError, TimeoutError
from decimal import Decimal
from scrapy_selenium import SeleniumRequest
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from shutil import which

from tools.scraper.scraper.items import RawProductItem, ProductItem
from tools.scraper.scraper.utils import CrawlingHelper
from tools.scraper.scraper.proxy import ProxyService


class ApiSpider(scrapy.Spider):
    name = "api"
    start_request_time = None
    url_timeout = []
    custom_settings = {
        "SELENIUM_DRIVER_NAME": "firefox",
        "SELENIUM_DRIVER_EXECUTABLE_PATH": which("geckodriver"),
        "SELENIUM_BROWSER_EXECUTABLE_PATH": which("firefox"),
        "SELENIUM_DRIVER_ARGUMENTS": [
            "--headless"
        ],  # '--headless' if using chrome instead of firefox
    }

    def __init__(self, *a, **kwargs):
        super(ApiSpider, self).__init__(*a, **kwargs)
        self.spider = kwargs.get("spider")
        self.parsers = self.spider.spider.parser_set
        self.count_err = 0
        self.news_thumbnail_link = None
        self.encoded_urls = []
        self.proxy_item = None
        self.START_URL = self.spider.spider.url
        self.LIMIT = int(self.spider.spider.limit_per_request)
        self.FILE_PROXY_PATH = os.path.join(file_dir, "../proxy_list.json")
        self.is_using_proxy = self.spider.spider.is_using_proxy
        self.current_page = int(self.spider.spider.start_page)
        self.end_page = int(self.spider.spider.end_page)
        self.retry = 0

    def start_requests(self):
        yield self.get_new_request()

    def get_diff_time(self):
        if self.start_request_time == None:
            self.start_request_time = time.time()
            return 0
        else:
            diff = (time.time() - self.start_request_time) / 60
            self.start_request_time = time.time()
            return diff

    def get_new_request(self, url=None):
        url = self.START_URL.format(self.LIMIT, self.current_page)
        params = {
            "url": url if url else url,
            "headers": {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0",
                "X-Requested-With": "XMLHttpRequest",
                # "Referer": "https://www.google.com/search?q=tiki&rlz=1C5CHFA_enVN972VN972&oq=tiki&aqs=chrome..69i57j0i67l4j69i60l3.1346j0j7&sourceid=chrome&ie=UTF-8"
            },
            "callback": self.parse,
            "errback": self.errbacktest,
            "meta": {
                "max_retry_times": 1,
                "download_timeout": 20,
            },
            "dont_filter": True,
        }
        if self.is_using_proxy:
            self.proxy_item = ProxyService.get_proxy_high_confident(
                self.FILE_PROXY_PATH, self.count_err
            )
            params["meta"]["proxy"] = self.proxy_item["curl"]
            CrawlingHelper.log(
                "=== Start request: {0} - {1} === ".format(url, self.proxy_item["curl"])
            )
        else:
            CrawlingHelper.log("=== Start request: {0} === ".format(url))
        self.start_urls.append(url)
        request = scrapy.Request(**params)
        return request

    def errbacktest(self, failure):
        if failure.check(HttpError):
            # these exceptions come from HttpError spider middleware
            # you can get the non-200 response
            response = failure.value.response
            print("HttpError on %s", response)
        elif failure.check(DNSLookupError):
            # this is the original request
            request = failure.request
            self.url_timeout.append(request.url)
            print("DNSLookupError on %s", request.url)

        elif failure.check(TimeoutError, TCPTimedOutError):
            request = failure.request
            self.url_timeout.append(request.url)
            print("TimeoutError on %s", request.url)
        else:
            print("Failure Undefined", failure)
        self.count_err += 1
        if self.is_using_proxy:
            print("===== Change proxy item")
            self.proxy_item = ProxyService.get_proxy_high_confident(
                self.FILE_PROXY_PATH, self.count_err
            )
            ProxyService.update_count_ip(
                self.FILE_PROXY_PATH, self.proxy_item.get("curl", ""), -100
            )
        yield self.get_new_request()

    def parse(self, response):
        product_items = response.json().get("data", None)
        if product_items:
            for product_item in product_items:
                if product_item:
                    encoded_url = CrawlingHelper.urlsafre_encode(
                        "https://{}/{}".format(
                            self.spider.spider.domain, product_item["url_key"]
                        )
                    )
                    if encoded_url in self.encoded_urls:
                        continue
                    self.encoded_urls.append(encoded_url)
                    item = self.parse_product_item(product_item)
                    yield item
        else:
            logging.info("Products empty")

        if product_items is None or len(product_items) == 0:
            self.retry += 1
        if self.current_page <= self.end_page and self.retry < 4:
            self.current_page += 1
            yield self.get_new_request()

    def get_id_product_by_base_encoded_url(self, base_encoded_url, shopid):
        path = os.path.join(root_dir, "../service/config_id_item.json")
        config_id_obj = CrawlingHelper.read_data_json(path)
        if base_encoded_url not in config_id_obj.keys():
            new_id_pcw = CrawlingHelper.create_uuid()
            while new_id_pcw in config_id_obj.values():
                new_id_pcw = CrawlingHelper.create_uuid()
            config_id_obj[base_encoded_url] = new_id_pcw
            CrawlingHelper.write_data_json(path, config_id_obj)
            CrawlingHelper.log("NEW ITEM: " + str(new_id_pcw) + " - " + str(shopid))
            return new_id_pcw
        CrawlingHelper.log(
            "OLD ITEM: " + str(config_id_obj[base_encoded_url]) + " - " + str(shopid)
        )
        return config_id_obj[base_encoded_url]

    def parse_product_item(self, response):
        merged_item = dict()
        merged_item.update(response)
        merged_item["url"] = "https://{}/{}.html".format(
            self.spider.spider.domain, response["url_key"]
        )
        merged_item["domain"] = self.spider.spider.domain
        merged_item["agency"] = self.spider.spider.agency
        merged_item["scraper_type"] = "api"
        merged_item["created_date"] = CrawlingHelper.get_now()
        merged_item["category_code"] = self.spider.category.name

        if self.is_using_proxy:
            ProxyService.update_count_ip(
                self.FILE_PROXY_PATH, self.proxy_item.get("curl", "")
            )
        return merged_item
