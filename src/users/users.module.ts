import { Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { EmailModule } from 'src/email/email.module';
import { UserEventsHandler } from './application/event/user-events.handler';
import { UsersController } from './interface/users.controller';
import { UserFactory } from './domain/user.factory';
import { CreateUserHandler } from './application/command/create-user.handler';
import { VerifyEmailHandler } from './application/command/verify-email.handler';
import { LoginHandler } from './application/command/login.handler';
import { VerifyAccessTokenHandler } from './application/command/verify-access-token.handler';
import { GetUserInfoQueryHandler } from './application/query/get-user-info.handler';
import { UserEntity } from './infra/db/entities/user.entity';

const commandHandlers = [
  CreateUserHandler,
  VerifyEmailHandler,
  LoginHandler,
  VerifyAccessTokenHandler,
];

const queryHandlers = [GetUserInfoQueryHandler];

const eventHandlers = [UserEventsHandler];

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
    CqrsModule,
  ],
  controllers: [UsersController],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...eventHandlers,
    Logger,
    UserFactory,
  ],
})
export class UsersModule {}
