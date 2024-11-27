import { Controller, Get, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @EventPattern('product-created')
  async productCreated(product: any) {
    await this.productService.create({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
      profileImg: product.profileImg,
      Username: product.Username,
      nickname: product.nickname,
    });
  }

  @EventPattern('product-updated')
  async productUpdated(product: any) {
    await this.productService.update(product.id, {
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
      profileImg: product.profileImg,
      Username: product.Username,
      nickname: product.nickname,
    });
  }

  @EventPattern('product-deleted')
  async productDeleted(id: number) {
    await this.productService.delete(id);
  }
}
