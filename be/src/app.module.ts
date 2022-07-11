import { Module } from '@nestjs/common';

import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [ProductController, CatsController],
  providers: [ProductService, CatsService],
})
export class AppModule {}
