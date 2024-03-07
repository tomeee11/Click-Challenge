import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ExceptionModule } from './exception/exception.module';
import { LoggingModule } from './logging/logging.module';
import authConfig from './config/authConfig';

@Module({
  imports: [
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: [
        `${process.cwd()}/src/config/env/.${process.env.NODE_ENV}.env`,
      ],
      //envFilePath는 NODE_ENV의 값이 stage라면 dist 디텍터리 아래 존재하는 파일인 .stage.env 파일의 절대 경로를 가지게 된다.
      load: [emailConfig, authConfig],
      //load 속성을 통해 앞에서 구성해둔 ConfigFactory를 지정한다.
      isGlobal: true,
      //전역 모듈로 동작하게 설정, 필요시에 EmailModule에만 임포트해도 된다.
      validationSchema,
      //환경변수 유효성 검사
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: [__dirname + '/**/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
    AuthModule,
    ExceptionModule,
    LoggingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
