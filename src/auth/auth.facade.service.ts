import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserCommandService } from "../user/user-command.service";
import { UserQueryService } from "../user/user-query.service";
import { User } from "../user/domain/user.domain";

@Injectable()
export class AuthFacadeService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userCommandService: UserCommandService,
    private readonly userQueryService: UserQueryService,
  ) {}

  // parameter must be registerRequest
  async registerIfAbsent(email: string): Promise<User> {
    const find = await this.userQueryService.findByEmail(email);
    if (find) return find;
    const user = await this.userCommandService.registerUser({
      name: "name",
      email: "email@email.com",
    });
    const now = new Date();
    console.log("user", user);
    console.log("now = ", now.localTimeZone());
    return user;
  }

  issueToken(userId: string, type: JwtTokenType): string {
    return this.jwtService.sign({
      type,
      id: userId,
      issuedAt: new Date(),
    });
  }
}
