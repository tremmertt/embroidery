# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class NewsItem(scrapy.Item):
    title = scrapy.Field()
    content = scrapy.Field()
    author = scrapy.Field()
    category = scrapy.Field()
    tag = scrapy.Field()
    url = scrapy.Field()
    image_link = scrapy.Field()
    thumbnail_link = scrapy.Field()
    image = scrapy.Field()
    summary = scrapy.Field()
    published_at = scrapy.Field()


# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import json
from json import JSONEncoder


class RawProductItem(scrapy.Item):
    url = scrapy.Field()
    sk = scrapy.Field()
    base_encoded_url = scrapy.Field()
    slug_id = scrapy.Field()
    voucher_info = scrapy.Field()
    html_text_compressed = scrapy.Field()
    domain = scrapy.Field()
    agency = scrapy.Field()
    xpath = scrapy.Field()
    is_api = scrapy.Field()
    shopid = scrapy.Field()
    created_date = scrapy.Field()


class ProductItem(scrapy.Item):
    id_pcw = scrapy.Field()
    name = scrapy.Field()
    clean_name = scrapy.Field()
    product_code = scrapy.Field()
    category_code = scrapy.Field()
    main_category_code = scrapy.Field()
    category_code_from_title = scrapy.Field()
    image = scrapy.Field()
    seller_name = scrapy.Field()
    brand = scrapy.Field()
    brand_from_title = scrapy.Field()
    price = scrapy.Field()
    stock = scrapy.Field()
    historical_sold = scrapy.Field()
    liked_count = scrapy.Field()
    shop_location = scrapy.Field()
    item_rating = scrapy.Field()
    list_price = scrapy.Field()
    content = scrapy.Field()
    slug_id = scrapy.Field()
    voucher_info = scrapy.Field()
    shop_item = scrapy.Field()
    description = scrapy.Field()


# subclass JSONEncoder
class Encoder(JSONEncoder):
    def default(self, o):
        return o.__dict__
