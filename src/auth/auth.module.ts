import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthFacadeService } from "./auth.facade.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRY_DAYS },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthFacadeService, JwtService],
})
export class AuthModule {}
