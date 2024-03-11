import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { DatabaseModule } from "./database/database.module";
import "./utils/date.extension"; // APP MODULE에 extension을 import하면 전역에서 사용할 수 있다!
import "./utils/array.extension";

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
