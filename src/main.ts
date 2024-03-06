import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

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
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        //NOTE:콘솔로 로그를 출력하지만, newRelic, DataDog 같은 외부 유료 서비스로 전송하여 분석 및 시각화 툴을 사용할 수 있다.
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  });
  //validationPipe 전역 적용, 및 class-fransformer를 적용하기 위해 true
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
