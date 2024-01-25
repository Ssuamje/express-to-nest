import { Prisma } from "prisma/generated/client";

// optional하게 where절을 사용하는 것은 서비스를 작성하는 입장에서 매우 편리하다.
// 이후에 ORM을 바꾸게 된다면. 해당하는 Input과 같은 값을 래핑해서 DataClient든 repository든, 해당하는 Input을 재구현한다.

export type UserWhereInput = Prisma.UserWhereInput;
export type UserWhereUniqueInput = Prisma.UserWhereUniqueInput;
export type UserCreateInput = Prisma.UserCreateInput;
export type UserUpdateInput = Prisma.UserUpdateInput;
