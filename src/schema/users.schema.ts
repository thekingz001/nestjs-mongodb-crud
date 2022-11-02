import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type UsersDocument = Users & Document;
@Schema({ timestamps: true })
export class Users {
  @Prop({
    type: Types.ObjectId,
    unique: true,
    auto: true,
    index: true,
    default: Types.ObjectId,
  })
  _id
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
  username
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
  password
  // password: {
  //   required: true,
  //   type: string,
  // };
  @Prop({
    type: String,
  })
  fristname
  // fristname: {
  //   type: string,
  // };
  @Prop({
    type: String,
  })
  lastname
  // lastname: {
  //   type: string,
  // };
  @Prop({
    type: Number,
  })
  age
  // age: {
  //   type: number,
  // };
  @Prop({
    type: Number,
  })
  coin
  // coin: {
  //   type: number,
  // };
  @Prop({
    type: String,
    default: "user",
  })
  type
  // type: {
  //   type: string,
  //   default: "user",
  // };
  @Prop({
    type: String,
    default: "true",
  })
  active
  // active: {
  //   type: string,
  //   default: "true",
  // };
}

export const UsersSchema = SchemaFactory.createForClass(Users);