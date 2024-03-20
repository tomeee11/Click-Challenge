// import * as uuid from 'uuid';
// import { CreateUserHandler } from './create-user.handler';
// import { Test } from '@nestjs/testing';
// import { CreateUserCommand } from './create-user.command';
// import { EventBus } from '@nestjs/cqrs';
// import { UserEntity } from 'src/users/infra/db/entities/user.entity';
// import { getConnectionToken, getRepositoryToken } from '@nestjs/typeorm';
// import { UserRepository } from 'src/users/infra/db/repository/UserRepository';
// import { UserFactory } from 'src/users/domain/user.factory';
// /*
// NOTE:
// 서적과 동일하게 진행하였지만, 테스트 모듈이 DataSource, UserEntity 등을 찾을 수 없다는 에러가 발생
// (CreateUserHandler 클래스에 주입받은 DataSource와 usersRepository: Repository<UserEntity>를 테스트 환경에서 주입하지 않아서 에러 발생)

// 해당 클레스에 의존성 주입받은 객체들을 모두 테스트 환경에서 모크하여 해결

// TODO:
// userRepository.save를 찾지를 못함...
//  ● CreateUserHandler › execute › should execute CreateUserCommand

//     expect(jest.fn()).toHaveBeenCalled()

//     Expected number of calls: >= 1
//     Received number of calls:    0
// */

// jest.mock('uuid');
// jest.spyOn(uuid, 'v1').mockReturnValue('0000-0000-0000-0000');

// describe('CreateUserHandler', () => {
//   let createUserHandler: CreateUserHandler;
//   let userRepository: UserRepository;
//   let userFactory: UserFactory;

//   beforeAll(async () => {
//     const module = await Test.createTestingModule({
//       providers: [
//         CreateUserHandler,
//         {
//           provide: EventBus,
//           useValue: {
//             publish: jest.fn(),
//           },
//         },
//         {
//           provide: getRepositoryToken(UserEntity),
//           useValue: {
//             findOne: jest.fn().mockResolvedValue(null),
//           },
//         },
//         {
//           provide: getConnectionToken(),
//           useValue: { transaction: jest.fn() },
//         },
//         {
//           provide: 'UserRepository',
//           useValue: {
//             save: jest.fn(),
//           },
//         },
//         {
//           provide: UserFactory,
//           useValue: {
//             create: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     createUserHandler = module.get(CreateUserHandler);
//     userRepository = module.get('UserRepository');
//     userFactory = module.get(UserFactory);
//   });

//   const name = '22tome';
//   const email = 'to22me@gmail.com';
//   const password = 'pass1234';
//   const signupVerifyToken = uuid.v1();

//   describe('execute', () => {
//     it('should execute CreateUserCommand', async () => {
//       // Given
//       userRepository.findByEmail = jest.fn().mockResolvedValue(null);
//       // When
//       await createUserHandler.execute(
//         new CreateUserCommand(name, email, password),
//       );
//       // Then
//       expect(userRepository.save).toBeCalledWith();
//     });
//   });
// });
