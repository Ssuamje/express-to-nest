import { UserCreateInput } from "../repository/user.repository.input";

/**
 * 왜 Prisma에서 generate된 코드를 그대로 사용하지 않는가?
 * 그 이유는 Prisma는 ORM이고, ORM의 엔티티, 모델 타입을 그대로 사용하는 경우 ORM을 바꾸는 것이 매우 힘들다.
 * 클린 아키텍처에서도 나타나듯, 실제로 비즈니스 영역의 도메인 객체와 ORM의 객체로서의 엔티티는 분리되어야 한다.
 * 예를 들어, M:N 관계나, ORM에서 사용하기 위한 여러 데코레이터 등은 사실 도메인 객체가 알 필요가 없다.
 * 즉 ORM의 변화는 내부적으로 도메인 객체와 비즈니스 로직 코드에 영향을 주지 않아야 한다.
 */
export class User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(
    id: string,
    email: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static create(createInput: UserCreateInput, createdAt: Date) {
    return new User(
      createInput.id,
      createInput.email,
      createInput.name,
      createdAt,
      createdAt,
    );
  }
}
