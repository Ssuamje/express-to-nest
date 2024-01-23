import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async registerUser(@Req() req: Request, res: Response) {
    console.log(JSON.stringify(req.body));
    return 'accept!';
  }
}
