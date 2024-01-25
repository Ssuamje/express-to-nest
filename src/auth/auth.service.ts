import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  createToken(userId: string, type: JwtTokenType): string {

    return this.jwtService.sign({
      type,
      id: userId,
      issuedAt: new Date()
    });
  }
}
