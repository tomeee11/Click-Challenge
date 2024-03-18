import * as uuid from 'uuid';
import { Test } from '@nestjs/testing';
import { CreateUserHandler } from './create-user.handler';
import { UserRepository } from 'src/users/infra/db/repository/UserRepository';
import { CreateUserCommand } from './create-user.command';
import { UnprocessableEntityException } from '@nestjs/common';
import { UserFactory } from 'src/users/domain/user.factory';
/*
NOTE: 특정 모듈의 경로를 읽어오지 못하여 package.json에 아래 코드 추가
    "jest":{
        "rootDir": "./",
        "modulePaths": ["<rootDir>"],
    }
TODO:
 ● CreateUserHandler › execute › should create a new user
 ● CreateUserHandler › execute › should throw UnprocessableEntityException when user already exists
 두가지의 에러 해결.
*/
jest.mock('uuid');
jest.spyOn(uuid, 'v1').mockReturnValue('0000-0000-0000-0000');

describe('CreateUserHandler', () => {
  let createUserHandler: CreateUserHandler;
  let userFactory: UserFactory;
  let userRepository: UserRepository;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateUserHandler,
        {
          provide: UserFactory,
          useValue: {
            create: jest.fn(),
          },
        },
        {
          provide: 'UserRepository',
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    createUserHandler = module.get(CreateUserHandler);
    userFactory = module.get(UserFactory);
    userRepository = module.get('UserRepository');
  });

  const name = 'Dexter';
  const email = 'dexter.haan@gmail.com';
  const password = 'pass1234';
  const signupVerifyToken = uuid.v1();

  describe('execute', () => {
    it('should execute CreateUserCommand', async () => {
      // Given
      userRepository.findByEmail = jest.fn().mockResolvedValue(null);

      // When
      await createUserHandler.execute(
        new CreateUserCommand(name, email, password),
      );

      // Then
      expect(userRepository.save).toBeCalledWith(
        name,
        email,
        password,
        signupVerifyToken,
      );
      expect(userFactory.create).toBeCalledWith(
        name,
        email,
        signupVerifyToken,
        password,
      );
    });

    it('should throw UnprocessableEntityException when user exists', async () => {
      // Given
      userRepository.findByEmail = jest.fn().mockResolvedValue({
        name,
        email,
        password,
        signupVerifyToken,
      });

      // When
      // Then
      await expect(
        createUserHandler.execute(new CreateUserCommand(name, email, password)),
      ).rejects.toThrowError(UnprocessableEntityException);
    });
  });
});
