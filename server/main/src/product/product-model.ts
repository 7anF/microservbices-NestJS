import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  likes: string;

  @Prop()
  profileImg: string;

  @Prop()
  Username: string;

  @Prop()
  nickname: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
