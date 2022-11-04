import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

function formatDate(date) {
  var datenow = new Date(date),
      month = '' + (datenow.getMonth() + 1),
      day = '' + datenow.getDate(),
      year = datenow.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
export type BooksDocument = Books & Document;

@Schema({ timestamps: true })
export class Books {
  @Prop({
    type: String,
  })
  bookname: string;

  @Prop({
    type: Number,
  })
  price: number;
  
  @Prop({
    type: String,
  })
  book_type: string;
  
  @Prop({
    type: Number,
    default: 10,
  })
  amount: number;

  @Prop({
    type: Date,
    default: formatDate(Date()),
  })
  adddate: Date;
}

export const BooksSchema = SchemaFactory.createForClass(Books);