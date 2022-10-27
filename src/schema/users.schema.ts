import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Document, Mongoose } from 'mongoose';
const mongoose = require('mongoose');
// var ObjectId = mongoose.Types.ObjectId;
export type UsersDocument = Users & Document;
@Schema({
  autoIndex: true, // <--
})
export class Users {
  // @Prop({
  //   type: Number,
  //   index: true,
  //   // required: true,
  //   auto: true,
  //   unique: true,
  // })
  // _id: ObjectId;
  @Field(() => ID,{ nullable: true })
  _id: string;

  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  username: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: String,
  })
  fristname: string;
  
  @Prop({
    type: String,
  })
  lastname: string;

  @Prop({
    type: Number,
  })
  age: number;

  @Prop({ default: "user" })
  type: string;

  @Prop({ default: "true" })
  active: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);