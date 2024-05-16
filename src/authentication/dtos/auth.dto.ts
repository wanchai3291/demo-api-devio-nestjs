import { IsEmail, IsString } from 'class-validator';

export class Authentication {
  @IsEmail()
  username: string;

  @IsString()
  password: string;
}
