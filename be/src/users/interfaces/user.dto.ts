import { IsNotEmpty, IsEmail } from 'class-validator';
import { Role } from '../entities/role.enum';

export class UserDto {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  role: Role;

  createdAt?: Date;
}
