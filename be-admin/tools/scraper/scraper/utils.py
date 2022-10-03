import os
import sys
import datetime
import json
import base64
import re
import uuid
import random

from price_parser import Price
from urllib.parse import urljoin, urlparse
from json import JSONEncoder

file_dir = os.path.dirname(os.path.realpath(__file__))
root_dir = os.path.abspath(file_dir + "/..")
sys.path.append(os.path.normpath(root_dir))

from io import StringIO
from html.parser import HTMLParser


class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.text = StringIO()

    def handle_data(self, d):
        self.text.write(d)

    def get_data(self):
        return self.text.getvalue()


class Encoder(JSONEncoder):
    def default(self, o):
        return o.__dict__


class SettingService(object):
    @staticmethod
    def get_all_brand_dirs():
        settings_file_dir = os.path.join(
            root_dir, "product_crawler/spiders/setting/brands"
        )
        _dirs = os.listdir(settings_file_dir)
        return [os.path.join(settings_file_dir, _dir) for _dir in _dirs]

    @staticmethod
    def get_setting_brand(path):
        with open(path, "r") as f:
            return [i.replace("\n", "") for i in f.readlines()]

    @staticmethod
    def get_all_setting_brand_items():
        setting_brands = {}
        setting_brand_dirs = SettingService.get_all_brand_dirs()

        for setting_brand_dir in setting_brand_dirs:
            setting_brand_name = setting_brand_dir.split("/")[-1]
            setting_brands[setting_brand_name] = SettingService.get_setting_brand(
                setting_brand_dir
            )
        return setting_brands

    @staticmethod
    def get_brand_from_name(item_name, setting_brands):
        # key: phone
        # brands: list brand items
        for key, brands in setting_brands.items():
            for brand in brands:
                words1 = set(item_name.lower().split())
                words2 = set(brand.lower().split(","))
                match_category_name_items = words1.intersection(words2)
                if len(match_category_name_items) != 0:
                    return brand.split(",")[0].strip()
        return ""


class CrawlingHelper(object):
    @staticmethod
    def no_accent_vietnamese(s):
        s = re.sub(r"[àáạảãâầấậẩẫăằắặẳẵ]", "a", s)
        s = re.sub(r"[ÀÁẠẢÃĂẰẮẶẲẴÂẦẤẬẨẪ]", "A", s)
        s = re.sub(r"[èéẹẻẽêềếệểễ]", "e", s)
        s = re.sub(r"[ÈÉẸẺẼÊỀẾỆỂỄ]", "E", s)
        s = re.sub(r"[òóọỏõôồốộổỗơờớợởỡ]", "o", s)
        s = re.sub(r"[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]", "O", s)
        s = re.sub(r"[ìíịỉĩ]", "i", s)
        s = re.sub(r"[ÌÍỊỈĨ]", "I", s)
        s = re.sub(r"[ùúụủũưừứựửữ]", "u", s)
        s = re.sub(r"[ƯỪỨỰỬỮÙÚỤỦŨ]", "U", s)
        s = re.sub(r"[ỳýỵỷỹ]", "y", s)
        s = re.sub(r"[ỲÝỴỶỸ]", "Y", s)
        s = re.sub(r"[Đ]", "D", s)
        s = re.sub(r"[đ]", "d", s)
        return s

    @staticmethod
    def get_name_by_time(cur_version=""):
        if cur_version != "":
            cur_version += "."
        return cur_version + (
            datetime.datetime.utcnow().replace(microsecond=0).isoformat() + "Z"
        ).replace(":", "_")

    @staticmethod
    def get_now():
        return (
            datetime.datetime.utcnow().replace(microsecond=0).isoformat() + "Z"
        ).replace(":", "_")

    @staticmethod
    def urlsafre_encode(url):
        return (
            base64.urlsafe_b64encode(url.encode("utf-8")).decode("utf-8").rstrip("=")
            if url
            else ""
        )

    @staticmethod
    def urlsafre_decode(encoded_str):
        return (
            base64.urlsafe_b64decode(encoded_str + "===").decode("utf-8")
            if encoded_str
            else ""
        )

    @staticmethod
    def get_clean_url(url):
        return urljoin(url, urlparse(url).path)

    @staticmethod
    def get_all_exist_urls():
        return []
        # encoded_urls = []
        # data_crawler_file_dir = os.path.join(root_dir, 'product_crawler/data_crawler')
        # if not os.path.exists(data_crawler_file_dir):
        #     os.makedirs(data_crawler_file_dir)
        # data_crawler_file_dirs = os.listdir(data_crawler_file_dir)
        # for _dir in data_crawler_file_dirs:
        #     if '.' in _dir: continue
        #     item_dirs = os.listdir(os.path.join(root_dir, 'product_crawler/data_crawler', _dir))
        #     encoded_urls.extend(item_dirs)
        # return encoded_urls

    @staticmethod
    def read_data_json(path):
        with open(path, "r") as f:
            data = json.load(f)
            return data

    @staticmethod
    def write_data_json(path, data):
        with open(path, "w", encoding="utf8") as f:
            json.dump(data, f, ensure_ascii=True, indent=4, cls=Encoder)
            f.close()

    @staticmethod
    def write_data_txt(path, data):
        with open(path, "w") as f:
            f.write(data)

    @staticmethod
    def log(message, _type="INFO"):
        print("[{}] - {}: {}".format(_type, CrawlingHelper.get_now(), message))

    @staticmethod
    def get_all_goods_items_json(list_dir=[]):
        goods_items = []
        for _dir in list_dir:
            goods_items.append(CrawlingHelper.read_data_json(_dir))
        return goods_items

    @staticmethod
    def create_uuid(digits=12):
        i = ""
        while len(i) != digits:
            i = str(int(uuid.uuid4().hex[:digits], base=16))
        return i

    @staticmethod
    def create_unique_id_from_time():
        return datetime.datetime.now().strftime("%Y%m%d%H%M%S")

    @staticmethod
    def get_random_from_list(number=2, list_item=[]):
        if len(list_item) == 0:
            return []
        random.shuffle(list_item)
        return list_item[:number]

    @staticmethod
    def uniqueid():
        seed = random.getrandbits(32)
        while True:
            yield seed
            seed += 1

    @staticmethod
    def get_currency_from_text(text):
        price = Price.fromstring("".join(text).strip())
        if price.amount_float and price.amount_float > float(999):
            return price.amount_float
        return None
