import { IsEmail, IsString } from 'class-validator';

export class User {
  @IsEmail()
  @IsString()
  username: string;

  @IsString()
  password: string;
}
