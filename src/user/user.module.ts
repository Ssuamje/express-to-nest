import { Module, Provider } from "@nestjs/common";
import { UserCommandService } from "./user-command.service";
import { UserController } from "./user.controller";
import { UserRepositoryImpl } from "./repository/user.repository.impl";
import { IUserRepository } from "./repository/user.repository.interface";
import { DatabaseModule } from "../database/database.module";
import { DatabasePrismaClient } from "../database/database.prisma.client";
import { UserQueryService } from "./user-query.service";

export const userRepositoryProvider: Provider = {
  provide: IUserRepository,
  inject: [DatabasePrismaClient],
  useFactory: (databaseClient) => new UserRepositoryImpl(databaseClient),
};

@Module({
  imports: [DatabaseModule],
  providers: [UserCommandService, UserQueryService, userRepositoryProvider],
  controllers: [UserController],
  exports: [UserCommandService, UserQueryService],
})
export class UserModule {}
