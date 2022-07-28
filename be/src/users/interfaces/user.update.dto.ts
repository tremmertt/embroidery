import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
