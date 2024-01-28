import { Inject, Injectable } from "@nestjs/common";
import {
  IUserRepository,
  UserRepository,
} from "./repository/user.repository.interface";
import { User } from "./domain/user.domain";

@Injectable()
export class UserQueryService {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ email: email });
  }
}
