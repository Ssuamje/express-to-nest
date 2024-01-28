import { Module, Provider } from "@nestjs/common";
import { DatabasePrismaClient } from "./database.prisma.client";

const DatabasePrismaClientProvider: Provider = {
  provide: DatabasePrismaClient,
  useFactory: () => {
    return new DatabasePrismaClient(process.env.DATABASE_URL);
  },
};

@Module({
  providers: [DatabasePrismaClientProvider],
  exports: [DatabasePrismaClient],
})
export class DatabaseModule {}
