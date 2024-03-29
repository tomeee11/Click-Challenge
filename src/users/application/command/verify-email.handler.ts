import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { VerifyEmailCommand } from './verify-email.command';
import { AuthService } from 'src/auth/auth.service';
import { UserEntity } from 'src/users/infra/db/entities/user.entity';

@Injectable()
@CommandHandler(VerifyEmailCommand)
export class VerifyEmailHandler implements ICommandHandler<VerifyEmailCommand> {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private authService: AuthService,
  ) {}

  async execute(command: VerifyEmailCommand) {
    const { signupVerifyToken } = command;

    const user = await this.usersRepository.findOne({
      where: { signupVerifyToken },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return this.authService.login({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
}
