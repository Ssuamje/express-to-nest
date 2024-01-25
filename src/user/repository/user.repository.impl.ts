import { DatabasePrismaClient } from "src/database/database.prisma.client";
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from "./user.repository.input";
import { UserRepository } from "./user.repository.interface";
import { User } from "../domain/user.domain";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly databaseClient: DatabasePrismaClient) {}

  async findOne(userWhereInput: UserWhereUniqueInput) {
    return this.databaseClient.user.findUnique({ where: userWhereInput });
  }

  async findMany(usersWhereInput: UserWhereInput) {
    return this.databaseClient.user.findMany({ where: usersWhereInput });
  }

  async createOne(userCreateInput: UserCreateInput) {
    return this.databaseClient.user.create({ data: userCreateInput });
  }

  async updateOne(user: User, userUpdateInput: UserUpdateInput) {
    return this.databaseClient.user.update({
      where: { id: user.id },
      data: userUpdateInput,
    });
  }
}
