import { Module } from "@nestjs/common";
import { DatabasePrismaClient } from "./database.prisma.client";

@Module({
  providers: [
    {
      provide: DatabasePrismaClient,
      useFactory: () => {
        return new DatabasePrismaClient(process.env.DATABASE_URL);
      },
    },
  ],
  exports: [DatabasePrismaClient],
})
export class DatabaseModule {}
