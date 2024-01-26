import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./user.create.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() dto: UserCreateDto) {
    return await this.userService.registerUser(dto);
  }
}
