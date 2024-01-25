import { Inject, Injectable } from "@nestjs/common";
import {
  IUserRepository,
  UserRepository,
} from "./repository/user.repository.interface";

@Injectable()
export class UserService {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: UserRepository,
  ) {}
}
