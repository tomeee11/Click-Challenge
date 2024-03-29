import { Test } from '@nestjs/testing';
import { VerifyAccessTokenHandler } from './verify-access-token.handler';
import * as jwt from 'jsonwebtoken';
import { UnauthorizedException } from '@nestjs/common';
import authConfig from 'src/config/authConfig';

describe('VerifyAccessTokenHandler', () => {
  let verifyAccessTokenHandler: VerifyAccessTokenHandler;
  const mockJwtSecret = ' SECRET';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        VerifyAccessTokenHandler,
        {
          provide: authConfig.KEY,
          useValue: {
            jwtSecret: mockJwtSecret,
          },
        },
      ],
    }).compile();

    verifyAccessTokenHandler = module.get(VerifyAccessTokenHandler);
  });

  describe('execute', () => {
    const user = {
      id: 1,
      email: 'test@example.com',
    };
    const token = jwt.sign(user, mockJwtSecret);

    it('should return userId and email when token is valid', async () => {
      // Given
      const jwtString = token;
      // When
      const result = await verifyAccessTokenHandler.execute({
        jwtString,
      });
      // Then
      expect(result.userId).toEqual(user.id);
      expect(result.email).toEqual(user.email);
    });

    it('should throw UnauthorizedException when token is invalid', async () => {
      // Given
      const invalidToken = 'invalid_token';

      // When, Then
      await expect(
        verifyAccessTokenHandler.execute({ jwtString: invalidToken }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
