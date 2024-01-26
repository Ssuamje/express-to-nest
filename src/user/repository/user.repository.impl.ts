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
import { PrismaMapper } from "src/database/database.prisma.mapper";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly databaseClient: DatabasePrismaClient) {}

  async findOne(userWhereInput: UserWhereUniqueInput): Promise<User | null> {
    const find = await this.databaseClient.user.findUnique({
      where: userWhereInput,
    });
    return PrismaMapper.toUser(find);
  }

  async findMany(usersWhereInput: UserWhereInput): Promise<User[]> {
    const finds = await this.databaseClient.user.findMany({
      where: usersWhereInput,
    });
    return finds.map((find) => PrismaMapper.toUser(find));
  }

  async createOne(userCreateInput: UserCreateInput): Promise<User | undefined> {
    const created = await this.databaseClient.user.create({
      data: userCreateInput,
    });
    return PrismaMapper.toUser(created);
  }

  async updateOne(
    user: User,
    userUpdateInput: UserUpdateInput,
  ): Promise<User | undefined> {
    const updated = await this.databaseClient.user.update({
      where: { id: user.id },
      data: userUpdateInput,
    });
    return PrismaMapper.toUser(updated);
  }
}
