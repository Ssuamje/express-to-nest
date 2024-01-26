import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./user.create.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Body() dto: UserCreateDto) {
    return await this.userService.registerUser(dto);
  }

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
}
