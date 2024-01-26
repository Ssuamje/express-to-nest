/**
 * https://docs.nestjs.com/fundamentals/testing
 */

import { Test } from "@nestjs/testing";
import { AppModule } from "../../src/app.module";
import { UserController } from "../../src/user/user.controller";
import { INestApplication } from "@nestjs/common";

describe("E2E 테스트를 시작한다 - UserController", () => {
  let app: INestApplication;
  let userController: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UserController)
      .useValue(userController)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe("아마도 Describe는 Nesting이 될테지", () => {
    it("it은 Describe 안에만 있으면 된다.", () => {
      // it을 given으로 바꾸고, when, then만 걸어서 표기하면 볼만하겠지.
      expect(true).toBeTruthy();
    });
  });
});
