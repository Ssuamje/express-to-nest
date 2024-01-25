import { User } from "../domain/user.domain";
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from "./user.repository.input";

export interface UserRepository {
  findOne(userWhereInput: UserWhereUniqueInput): Promise<User>;
  findMany(usersWhereInput: UserWhereInput): Promise<User[]>;
  createOne(userCreateInput: UserCreateInput): Promise<User>;
  updateOne(user: User, userUpdateInput: UserUpdateInput): Promise<User>;
}

export const IUserRepository = Symbol("IUserRepository");
