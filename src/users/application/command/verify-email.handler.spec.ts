import { AuthService } from 'src/auth/auth.service';
import { VerifyEmailHandler } from './verify-email.handler';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/infra/db/entities/user.entity';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VerifyEmailCommand } from './verify-email.command';
import { NotFoundException } from '@nestjs/common';

describe('VerifyEmailHandler', () => {
  let verifyEmailHandler: VerifyEmailHandler;
  let authService: AuthService;
  let userRepository: Repository<UserEntity>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        VerifyEmailHandler,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn(),
          },
        },
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
          },
        },
      ],
    }).compile();

    verifyEmailHandler = module.get(VerifyEmailHandler);
    authService = module.get(AuthService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  const signupVerifyToken = 'test';
  const email = undefined;
  const name = undefined;
  const id = undefined;

  describe('execute', () => {
    it('should throw NotFoundException when user is not found', async () => {
      // Given
      //When
      const command = new VerifyEmailCommand(signupVerifyToken);
      const executePromise = verifyEmailHandler.execute(command);
      // Then
      await expect(executePromise).rejects.toThrowError(NotFoundException);
    });

    it('should login user when user exists', async () => {
      // Given
      userRepository.findOne = jest
        .fn()
        .mockResolvedValue({ signupVerifyToken });
      //When
      const command = new VerifyEmailCommand(signupVerifyToken);
      await verifyEmailHandler.execute(command);
      // Then
      expect(authService.login).toBeCalledWith({ email, id, name });
    });
  });
});
