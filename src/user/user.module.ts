import { Module, Provider } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepositoryImpl } from "./repository/user.repository.impl";
import { IUserRepository } from "./repository/user.repository.interface";
import { DatabaseModule } from "../database/database.module";
import { DatabasePrismaClient } from "../database/database.prisma.client";

const userRepositoryProvider: Provider = {
  provide: IUserRepository,
  inject: [DatabasePrismaClient],
  useFactory: (databaseClient) => new UserRepositoryImpl(databaseClient),
};

@Module({
  imports: [DatabaseModule],
  providers: [UserService, userRepositoryProvider],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
