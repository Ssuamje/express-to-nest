import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 타입 변환이 가능한 경우 자동으로 변환
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 속성이 들어오면 요청 자체를 막음
    }),
  );
  await app.listen(3000);
}
bootstrap();
