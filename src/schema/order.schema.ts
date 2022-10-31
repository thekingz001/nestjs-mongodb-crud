import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrdersDocument = Order & Document;

@Schema()
export class Order {
  @Prop({
    type: Types.ObjectId,
    unique: true,
    auto: true,
    default: Types.ObjectId,
  })
  _id: string;
  // _id: {
  //   index: true,
  //   unique: true,
  //   required: true,
  //   auto: true,
  // };
  @Prop({
    type: String,
    unique: true,
  })
  order_name
  // order_name: {
  //   type: string,
  // };
  @Prop({
    type: Number,
  })
  price: number
  // price: {
  //   type: number,
  // };
  @Prop({
    type: String,
  })
  book_type: string
  // book_type: {
  //   type: string,
  // };
  @Prop({
    type: String,
    default: 1,
  })
  amount: string
  // amount: {
  //   type: string,
  //   default: 1
  // };

}

export const OrdersSchema = SchemaFactory.createForClass(Order);