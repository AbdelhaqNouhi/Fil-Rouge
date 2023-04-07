import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../Schema/Product/Product.schema';
import { RolesGuard } from '../auth/guard/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/utiles/jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService, JwtService, JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    } 
  ]
})
export class ProductModule {}
