import { IsEmail, IsNotEmpty } from "class-validator";

export class UserCreateDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
