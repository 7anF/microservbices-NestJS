import { Get, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product-model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async all(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async create(data): Promise<Product> {
    return await this.productModel.create(data);
  }

  async findeOne(id: number): Promise<Product> {
    return this.productModel.findOne({ id });
  }

  async update(id: number, data): Promise<any> {
    return this.productModel.updateOne({ id }, data);
  }

  async delete(id: number): Promise<void> {
    await this.productModel.deleteOne({ id });
  }
}
