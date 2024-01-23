import { Module } from '@nestjs/common';
import { DatabasePrismaClient } from './database.prisma.client';

@Module({
  providers: [DatabasePrismaClient],
  exports: [DatabasePrismaClient],
})
export class DatabaseModule {}
