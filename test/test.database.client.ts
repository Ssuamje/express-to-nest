import { PrismaClient } from "../src/database/prisma/generated/client";
import { MongoMemoryReplSet } from "mongodb-memory-server";

export class TestDatabaseClient {
  private static instance: PrismaClient;
  private static stop: () => Promise<void>;
  private static cleanUp: () => Promise<void>;

  private constructor() {}

  public static async getInstance(): Promise<PrismaClient> {
    if (!TestDatabaseClient.instance) {
      const inMemoryDatabase = await MongoMemoryReplSet.create({
        replSet: { count: 3 },
      });
      const url =
        inMemoryDatabase.getUri().split(",")[0] +
        "/test?replicaSet=rs0&retryWrites=true&w=majority";

      this.instance = new PrismaClient({
        datasources: { db: { url } },
      });
      this.stop = async () => {
        await inMemoryDatabase.stop();
      };
      this.clean = async () => {
        await inMemoryDatabase.cleanup();
      };
      await this.instance.$connect();
      console.log("TestDatabaseClient connected");
    }
    return this.instance;
  }
  public static async closeInstance(): Promise<void> {
    await this.instance.$disconnect();
    await this.stop();
  }
  public static async clean(): Promise<void> {
    await this.cleanUp();
  }
}
