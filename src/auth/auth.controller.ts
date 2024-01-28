import { Controller, Get, Redirect } from "@nestjs/common";
import { AuthFacadeService } from "./auth.facade.service";
import { UuidFactory } from "@nestjs/core/inspector/uuid-factory";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthFacadeService) {}

  @Get("/login") // register must be in callback
  @Redirect("/main")
  async registerUserIfAbsent() {
    const userId = UuidFactory.get();
    console.log("userId", userId);
    return await this.authService.registerIfAbsent(userId);
  }
}
