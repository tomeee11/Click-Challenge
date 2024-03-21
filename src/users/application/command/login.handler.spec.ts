import { LoginHandler } from './login.handler';
import { AuthService } from 'src/auth/auth.service';
import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/infra/db/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LoginCommand } from './login.command';
import { NotFoundException } from '@nestjs/common';

describe('LoginHandler', () => {
  let loginHandler: LoginHandler;
  let authService: AuthService;
  let userRepository: Repository<UserEntity>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        LoginHandler,
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

    loginHandler = module.get(LoginHandler);
    authService = module.get(AuthService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  const email = 'to22me@gmail.com';
  const password = 'pass1234';
  const name = undefined;
  const id = undefined;

  describe('execute', () => {
    it('should throw NotFoundException when user does not exist', async () => {
      // Given

      // When
      const loginCommand = new LoginCommand(email, password);
      const executePromise = loginHandler.execute(loginCommand);
      // Then
      await expect(executePromise).rejects.toThrowError(NotFoundException);
    });

    it('should login user when user exists', async () => {
      // Given
      userRepository.findOne = jest.fn().mockResolvedValue({
        email,
        password,
      });

      // When
      const loginCommand = new LoginCommand(email, password);
      await loginHandler.execute(loginCommand);
      // Then
      expect(authService.login).toBeCalledWith({ email, id, name });
    });
  });
});
