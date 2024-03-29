import { Inject, Injectable } from "@nestjs/common";
import {
  IUserRepository,
  UserRepository,
} from "./repository/user.repository.interface";
import { UserCreateDto } from "./user.create.dto";

@Injectable()
export class UserCommandService {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async registerUser(dto: UserCreateDto) {
    console.log("registerUser");
    return await this.userRepository.createOne(dto);
  }

  async getUsers() {
    return await this.userRepository.findAll();
  }
}
