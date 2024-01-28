import { User as PrismaUser } from "./prisma/generated/client";
import { User } from "../user/domain/user.domain";

export class PrismaMapper {
  private constructor() {
    throw new Error("This class cannot be instantiated.");
  }

  public static toPrismaUser(user: User | null): PrismaUser {
    if (!user) {
      throw new Error("User cannot be null.");
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  public static toUser(prismaUser: PrismaUser | null): User {
    if (!prismaUser) {
      throw new Error("PrismaUser cannot be null.");
    }
    return new User(
      prismaUser.id,
      prismaUser.email,
      prismaUser.name!,
      prismaUser.createdAt,
      prismaUser.updatedAt,
    );
  }
}
