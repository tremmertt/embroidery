import requests
import json
import os
import traceback
import random
from tools.scraper.scraper.utils import CrawlingHelper


class ProxyService(object):
    @staticmethod
    def get_list_proxy(path):
        try:
            return CrawlingHelper.read_data_json(path)
        except Exception as error:
            traceback.print_exc()
            print("Get list proxy err", proxy)
            pass

    @staticmethod
    def get_random_proxy(path):
        try:
            list_data = CrawlingHelper.read_data_json(path)
            n = random.randint(0, len(list_data) - 1)
            return list_data[n]
        except Exception as error:
            traceback.print_exc()
            print("Get random proxy err", proxy)
            pass

    @staticmethod
    def get_proxy_high_confident(path, count=0):
        try:
            list_data = CrawlingHelper.read_data_json(path)
            list_data = list(
                sorted(list_data, key=lambda x: x.get("count_use", 0), reverse=True)
            )
            return list_data[count]
        except Exception as error:
            traceback.print_exc()
            print("Get proxy high confident err", proxy)
            pass

    @staticmethod
    def save_proxy_list_scrapy(path, save_path):
        try:
            list_data = CrawlingHelper.read_data_json(path)
            proxy_map = list(map(lambda x: x["curl"], list_data))
            CrawlingHelper.write_data_txt(save_path, "\n".join(proxy_map))
        except Exception as error:
            traceback.print_exc()
            print("Get save proxy list scrapy err")
            pass

    @staticmethod
    def save_proxy(path, proxy):
        try:
            if os.path.isfile(path):
                list_data = CrawlingHelper.read_data_json(path)
                ip_map = list(map(lambda x: x["ip"], list_data))
                if proxy["ip"] not in ip_map:
                    list_data.append(proxy)
                    CrawlingHelper.write_data_json(path, list_data)
                    print("Save success")
                    return True
                return False
            else:
                list_data = [proxy]
                CrawlingHelper.write_data_json(path, list_data)
        except Exception as error:
            traceback.print_exc()
            print("Save proxy err", proxy)
            pass

    @staticmethod
    def update_count_ip(path, curl, number=1):
        try:
            if os.path.isfile(path):
                list_data = CrawlingHelper.read_data_json(path)
                curl_map = list(map(lambda x: x["curl"], list_data))
                if curl in curl_map:
                    proxy_item = next(x for x in list_data if x["curl"] == curl)
                    if proxy_item:
                        if "count_use" in proxy_item.keys():
                            proxy_item["count_use"] += number
                        else:
                            proxy_item["count_use"] = 1
                        CrawlingHelper.write_data_json(path, list_data)
            else:
                print("Update count ip err", curl)
        except Exception as error:
            traceback.print_exc()
            print("Update count ip err", curl)
            pass

    @staticmethod
    def get_new_proxy():
        """
        Get new proxy, example like below:

        {
            "supportsHttps": true,
            "protocol": "http",
            "ip": "61.73.153.242",
            "port": "8080",
            "get": true,
            "post": true,
            "cookies": true,
            "referer": true,
            "user-agent": true,
            "anonymityLevel": 1,
            "websites": {
                "example": true,
                "google": false,
                "amazon": false,
                "yelp": false,
                "google_maps": true
            },
            "country": "KR",
            "unixTimestampMs": 1659172461341,
            "tsChecked": 1659172461,
            "unixTimestamp": 1659172461,
            "curl": "http://61.73.153.242:8080",
            "ipPort": "61.73.153.242:8080",
            "type": "http",
            "speed": 5.4,
            "otherProtocols": {},
            "verifiedSecondsAgo": 1317
        }
        """

        REQUEST_URL = "https://gimmeproxy.com/api/getProxy"
        params = dict(
            cookies="True",
            protocol="http",
        )
        resp = requests.get(url=REQUEST_URL, params=params)
        if resp.status_code == 200:
            binary = resp.content
            output = json.loads(binary)
            return {
                "supportsHttps": output["supportsHttps"],
                "protocol": output["protocol"],
                "ip": output["ip"],
                "port": output["port"],
                "type": output["type"],
                "curl": output["curl"],
                "ipPort": output["ipPort"],
            }
        return None
