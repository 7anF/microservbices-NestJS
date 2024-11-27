import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async create(data): Promise<Product> {
    return await this.productRepository.save(data);
  }

  async get(id: number): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: number, data): Promise<any> {
    return await this.productRepository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
