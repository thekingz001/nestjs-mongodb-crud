import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrdersDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({
    type: Types.ObjectId,
    unique: true,
    auto: true,
    index: true,
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
  })
  order_name: string

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
  book_name: string
  
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