import { Test } from '@nestjs/testing';
import { EventBus } from '@nestjs/cqrs';
import { UserFactory } from './user.factory';
import { User } from './user';
/*NOTE:
외부의 모듈을 임의의 객체로 다루는 것을 test double
dummy:가짜 데이터, 매개변수 목록을 채우는 데 사용
fake:DB를 직접적으로 사용하지 않고, 인메모리를 이용
spy:테스트 수행 정보를 기록
stup:호출된 함수에 대해 미리 정해진 응답을 제공
moke:스텁과 비슷하지만, 실제 객체를 대체하고 특정한 동작을 시뮬레이트
*/
describe('UserFactory', () => {
  //테스트용 객체 생성
  let userFactory: UserFactory;
  let eventBus: jest.Mocked<EventBus>;
  /*NOTE:
    jest에서
    모든 테스트 실행 전에 한 번만 실행 beforeAll()
    특정 테스트 실행 전에 한 번만 실행 beforeEach()
    */
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserFactory,
        {
          provide: EventBus,
          useValue: {
            publish: jest.fn(),
          },
        },
      ],
    }).compile();

    userFactory = module.get(UserFactory);
    eventBus = module.get(EventBus);
  });

  describe('create', () => {
    it('should create user', () => {
      // Given
      //조건 없음
      // When
      const user = userFactory.create(
        1,
        'tome',
        'tome@gmail.com',
        'signup-verify-token',
        'pass1234',
      );

      // Then
      const expected = new User(
        1,
        'tome',
        'tome@gmail.com',
        'pass1234',
        'signup-verify-token',
      );
      expect(expected).toEqual(user);

      expect(eventBus.publish).toBeCalledTimes(1);
    });
  });

  describe('reconstitute', () => {
    it('should reconstitute user', () => {
      // Given

      // When
      const user = userFactory.reconstitute(
        1,
        'tome',
        'tome@gmail.com',
        'pass1234',
        'signup-verify-token',
      );

      // Then
      const expected = new User(
        1,
        'tome',
        'tome@gmail.com',
        'signup-verify-token',
        'pass1234',
      );
      expect(expected).toEqual(user);
    });
  });
});
