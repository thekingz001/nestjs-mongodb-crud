import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  
  @Prop()
  _id: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  fristname: string;
  
  @Prop()
  lastname: string;

  @Prop()
  age: number;

  @Prop({ default: "user" })
  type: string;

  @Prop({ default: "true" })
  active: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);