import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async registerUser(req: Request, res: Response) {
    console.log(JSON.stringify(req.body));
    return 'accept!';
  }
}
