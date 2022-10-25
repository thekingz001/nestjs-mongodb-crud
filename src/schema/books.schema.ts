import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BooksDocument = Books & Document;

@Schema()
export class Books {
  
  @Prop()
  _id: number;

  @Prop()
  book_name: string;

  @Prop()
  price: number;

  @Prop()
  book_type: string;

  @Prop({ default: 10 })
  amount: number;

}

export const BooksSchema = SchemaFactory.createForClass(Books);