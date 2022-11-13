# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import scrapy
import requests
import json
import logging

from bs4 import BeautifulSoup
from django.utils import timezone
from django.forms.models import model_to_dict
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem
from dateutil import parser
from validators.url import url
from modules.crawler.models import RawProduct, Spider
from tools.scraper.scraper.utils import CrawlingHelper


class ScraperPipeline:
    def extract_text_item(self, item, scraper):
        def extract_text_with_bs4(attr):
            return BeautifulSoup(str(attr)).get_text().strip()

        if item["thumbnail_link"]:
            thumbnail_link = BeautifulSoup(item["thumbnail_link"], "html.parser")
            if thumbnail_link:
                thumbnail_link = thumbnail_link.img["src"]
                if not (url(thumbnail_link)):
                    thumbnail_link = scraper.homepage + thumbnail_link
        else:
            thumbnail_link = None

        if item["image_link"]:
            image_link = BeautifulSoup(item["image_link"], "html.parser")
            if image_link:
                image_link = image_link.img["src"]
                if not (url(image_link)):
                    image_link = scraper.homepage + image_link
        else:
            image_link = None

        output = {
            "title": extract_text_with_bs4(item["title"]),
            "content": extract_text_with_bs4(item["content"]),
            "author": extract_text_with_bs4(item["author"]),
            "image_link": image_link,
            "thumbnail_link": thumbnail_link,
            # 'category': BeautifulSoup(item['category']).get_text(),
            # 'tag': BeautifulSoup(item['tag']).get_text(),
            "summary": extract_text_with_bs4(item["summary"]),
            "published_at": parser.parse(
                " ".join(
                    " ".join(
                        extract_text_with_bs4(item["published_at"]).split(" - ")
                    ).split(" | ")
                ),
                fuzzy=True,
            ),
            "url": item["url"],
        }
        return output

    def convert_raw_product_db(self, item):
        return {
            "url": item.get("url"),
            "base_encoded_url": CrawlingHelper.urlsafre_encode(item.get("url")),
            "agency": item.get("agency"),
            "name": item.get("name", ""),
            "data": item,
            "scraper_type": item.get("scraper_type", "api"),
        }

    def process_item(self, item, spider):
        info_raw_product = self.convert_raw_product_db(item)
        try:
            info_raw_product_db = RawProduct.objects.get(
                base_encoded_url=info_raw_product["base_encoded_url"]
            )
            logging.info({"message": "[UPDATE PRODUCT]", "data": info_raw_product})
            for attr, value in info_raw_product.items():
                setattr(info_raw_product_db, attr, value)
            setattr(
                info_raw_product_db,
                "count_update",
                info_raw_product_db.count_update + 1,
            )
            info_raw_product_db.save()
        except:
            info_raw_product_db, is_created = RawProduct.objects.get_or_create(
                **info_raw_product
            )
            if not is_created:
                logging.error(
                    {"message": "[CREATE PRODUCT ERROR]", "data": info_raw_product}
                )
            else:
                logging.info({"message": "[CREATE PRODUCT]", "data": info_raw_product})

        return info_raw_product_db

    def close_spider(self, spider):
        spider = spider.spider.spider
        try:
            spider_db = Spider.objects.get(id=spider.id)
            spider_db.is_running = False
            spider_db.save()
        except:
            print("[CLOSE SPIDER ERROR]", spider)
