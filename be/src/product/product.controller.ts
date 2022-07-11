import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    console.log('createProductDto', createProductDto);
    this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
