import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type UsersDocument = Users & Document;
@Schema()
export class Users {
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
    required: true,
  })
  username: string;
  // username: {
  //   index: true,
  //   unique: true,
  //   required: true,
  //   type: string,
  // };
  @Prop({
    type: String,
    required: true,
  })
  password: string;
  // password: {
  //   required: true,
  //   type: string,
  // };
  @Prop({
    type: String,
  })
  fristname: string;
  // fristname: {
  //   type: string,
  // };
  @Prop({
    type: String,
  })
  lastname: string;
  // lastname: {
  //   type: string,
  // };
  @Prop({
    type: Number,
  })
  age: number
  // age: {
  //   type: number,
  // };
  @Prop({
    type: Number,
  })
  coin: number
  // coin: {
  //   type: number,
  // };
  @Prop({
    type: String,
    default: "user",
  })
  type: string
  // type: {
  //   type: string,
  //   default: "user",
  // };
  @Prop({
    type: String,
    default: "true",
  })
  active: string
  // active: {
  //   type: string,
  //   default: "true",
  // };
}

export const UsersSchema = SchemaFactory.createForClass(Users);