import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
