/**
 * https://docs.nestjs.com/fundamentals/testing
 */

import { Test } from "@nestjs/testing";
import { AppModule } from "../../src/app.module";
import { UserController } from "../../src/user/user.controller";
import { INestApplication } from "@nestjs/common";
import { DatabasePrismaClient } from "../../src/database/database.prisma.client";
import { PrismaClient } from "../../src/database/prisma/generated/client";
import { MongoMemoryReplSet } from "mongodb-memory-server";
import { UserCommandService } from "../../src/user/user-command.service";

describe("E2E 테스트를 시작한다 - UserController", () => {
  let app: INestApplication;
  let userController: UserController;
  let userService: UserCommandService;
  let prismaClient: PrismaClient;
  let databaseStop: () => Promise<void>;

  beforeAll(async () => {
    const inMemoryDatabase = await MongoMemoryReplSet.create({
      replSet: { count: 3, name: "rs0", storageEngine: "wiredTiger" },
    });
    console.log("getUri = " + inMemoryDatabase.getUri());
    const uri =
      inMemoryDatabase.getUri().split(",")[0] +
      `/test?replicaSet=rs0&retryWrites=true&w=majority`;
    console.log(`uri = ${uri}`);
    databaseStop = async () => {
      await inMemoryDatabase.stop();
    };
    prismaClient = new PrismaClient({
      datasources: { db: { url: uri } },
    });
    inMemoryDatabase.servers.forEach((server) => {
      console.log(server.instanceInfo);
    });
    await prismaClient.$connect();

    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(DatabasePrismaClient)
      .useValue(prismaClient)
      .overrideProvider(UserController)
      .useValue(userController)
      .compile();

    app = module.createNestApplication();
    userService = module.get<UserCommandService>(UserCommandService);
    await app.init();
  });

  afterEach(async () => {});

  afterAll(async () => {
    await prismaClient.$disconnect();
    await app.close();
    await databaseStop();
  });

  describe("아마도 Describe는 Nesting이 될테지", () => {
    it("it은 Describe 안에만 있으면 된다.", () => {
      // it을 given으로 바꾸고, when, then만 걸어서 표기하면 볼만하겠지.
      expect(true).toBeTruthy();
    });
  });

  describe("GET /user", () => {
    it("데이터가 하나 있을 때(이미 테스트 DB에 있긴 함)", async () => {
      await prismaClient.user.create({
        data: {
          name: "name",
          email: "email",
        },
      });

      const result = await prismaClient.user.findMany();
      expect(result.length).toBe(1);
    });
  });
});
