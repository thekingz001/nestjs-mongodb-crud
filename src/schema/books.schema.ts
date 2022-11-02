import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type BooksDocument = Books & Document;

@Schema({ timestamps: true })
export class Books {
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
    // required: true,
    // unique: true,
  })
  book_name: string
  // book_name: {
  //   index: true,
  //   unique: true,
  //   required: true,
  //   type: string,
  // };
  @Prop({
    type: Number,
  })
  price: number
  // price: {
  //   type: string,
  // };
  @Prop({
    type: String,
  })
  book_type: string
  // book_type: {
  //   type: string,
  // };
  @Prop({
    type: Number,
    default: 10,
  })
  amount: number
  // amount: {
  //   type: number,
  //   default: 10
  // };

}

export const BooksSchema = SchemaFactory.createForClass(Books);