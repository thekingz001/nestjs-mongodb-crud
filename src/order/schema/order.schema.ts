import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrdersDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({
    type: String,
  })
  customername: string;

  @Prop({
    type: Number,
  })
  price: number;

  @Prop({
    type: [String],
  })
  books: string[];

}

export const OrdersSchema = SchemaFactory.createForClass(Order);