import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
// import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],

      // [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      //envFilePath는 NODE_ENV의 값이 stage라면 dist 디텍터리 아래 존재하는 파일인 .stage.env 파일의 절대 경로를 가지게 된다.
      load: [emailConfig],
      //load 속성을 통해 앞에서 구성해둔 ConfigFactory를 지정한다.
      isGlobal: true,
      //전역 모듈로 동작하게 설정, 필요시에 EmailModule에만 임포트해도 된다.
      // validationSchema,
      // TODO:validationSchema.ts joi를 통한 유효성 검사 현재 에러 원인 파악이 어려워, 추후에 추가
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
