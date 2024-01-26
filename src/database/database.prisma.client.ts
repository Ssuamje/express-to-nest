import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "./prisma/generated/client";

// DatabaseClient는 ORM의 변경을 염두에 두고 한번 래핑하였다.
@Injectable()
export class DatabasePrismaClient
  extends PrismaClient
  implements OnModuleInit, OnApplicationShutdown
{
  async onModuleInit() {
    await this.$connect();
  }

  async onApplicationShutdown() {
    await this.$disconnect();
  }
}
