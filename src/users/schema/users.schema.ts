import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UsersDocument = Users & Document;
@Schema({ timestamps: true })
export class Users {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  username: string;
  
  @Prop({
    type: String,
    required: true,
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
  
  @Prop({
    type: Number,
  })
  coin: number;
  @Prop({
    type: String,
    default: "user",
  })
  type: string;
  
  @Prop({
    type: String,
    default: "true",
  })
  active: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);