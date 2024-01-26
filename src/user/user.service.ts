import { Inject, Injectable } from "@nestjs/common";
import {
  IUserRepository,
  UserRepository,
} from "./repository/user.repository.interface";
import { UserCreateDto } from "./user.create.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async registerUser(dto: UserCreateDto) {
    return await this.userRepository.createOne(dto);
  }
}
