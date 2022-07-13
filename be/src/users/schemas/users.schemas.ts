import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { Document } from 'mongoose';
import { Role } from '../entities/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  _id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @IsEmail()
  email: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  role: Role;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
