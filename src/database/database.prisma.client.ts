import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/generated/client";

// DatabaseClient는 ORM의 변경을 염두에 두고 한번 래핑하였다.
@Injectable()
export class DatabasePrismaClient extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
