import { User } from "../domain/user.domain";
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from "./user.repository.input";

export interface UserRepository {
  findOne(userWhereInput: UserWhereUniqueInput): Promise<User | null>;
  findMany(usersWhereInput: UserWhereInput): Promise<User[]>;
  createOne(userCreateInput: UserCreateInput): Promise<User | undefined>;
  updateOne(user: User, userUpdateInput: UserUpdateInput): Promise<User | undefined>;
}

export const IUserRepository = Symbol("IUserRepository");
