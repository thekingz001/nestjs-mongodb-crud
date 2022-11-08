import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type BooksDocument = Books & Document;
@Schema({ timestamps: true })
export class Books {
  @Prop({
    type: String,
    required: true,
    unique: true,
    
  })
  bookname: string;

  @Prop({
    type: Number,
    required: true,
  })
  price: number;
  
  @Prop({
    type: String,
    required: true,
  })
  booktype: string;
  
  @Prop({
    type: Number,
    default: 10,
  })
  amount: number;

  @Prop({
    type: Date,
    default: new Date(),
  })
  adddate: Date;
}

export const BooksSchema = SchemaFactory.createForClass(Books);