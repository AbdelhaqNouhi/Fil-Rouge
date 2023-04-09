import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Product, ProductDocument } from 'src/Schema/Product/Product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from '../dtos/Product.dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private ProductModule: Model<ProductDocument>) {}

    async GetAll() {
        const ProductData = await this.ProductModule.find({
            order: { createdAt: 'DESC' },
        }).exec();
        return ProductData;
    }

    async GetThree() {
        const products = await this.ProductModule.find().sort({ createdAt: 'desc' }).limit(3);
        return products;
    }

    async GetById(id: number) {
        const ProductId = await this.ProductModule.findById(id).exec();

        if(!ProductId) {
            throw new HttpException('Product not found!', HttpStatus.BAD_REQUEST);
        }
        return ProductId;
    }

    async Create(productData: ProductDto) {
        const ProductData = await this.ProductModule.create(productData);
        if(!ProductData) {
            throw new HttpException('Product not created!', HttpStatus.BAD_REQUEST);
        }
        return ProductData;
    }

    async Update(id: number, productData: ProductDto) {
        const Product = await this.ProductModule.findByIdAndUpdate(id, productData, { new: true }).exec();

        if(!Product) {
            throw new HttpException('Product not found!', HttpStatus.BAD_REQUEST);
        }
        return Product;
    }

    async Delete(id: number) {
        const ProductId = await this.ProductModule.findByIdAndDelete(id).exec();

        if(!ProductId) {
            throw new HttpException('Product not found!', HttpStatus.BAD_REQUEST);
        }
        return ProductId;
    }

}
