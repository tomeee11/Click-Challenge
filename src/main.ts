import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/*
-node 라이브러리인 dotenv를 직접 사용하였을 경우.
nestjs에서는 @nestjs/config 패키지를 제공한다.
*/
// import * as dotenv from 'dotenv';
// import * as path from 'path';

// dotenv.config({
//   path: path.resolve(
//     process.env.NODE_ENV === 'production'
//       ? '.production.env'
//       : process.env.NODE_ENV === 'stage'
//         ? '.stage.env'
//         : '.development.env',
//   ),
// });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //validationPipe 전역 적용, 및 class-fransformer를 적용하기 위해 true
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
