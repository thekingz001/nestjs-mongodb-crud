import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

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
    type: [{
      bookname: {type: String}, 
      price: {type: Number}, 
      type: {type: String}, 
      amout: {type: Number},
      booktotal: {type: Number},
    }],
  })
  books: { bookname: string; price: number; type: string; amout: number; booktotal: number; }[];

}

export const OrdersSchema = SchemaFactory.createForClass(Order);