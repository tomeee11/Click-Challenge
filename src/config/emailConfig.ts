/*
커스텀 config 생성
env를 단위별로 묶어서 관리하기 위해 만듬.
*/

import { registerAs } from '@nestjs/config';
/*
registerAs는 첫 번째 인수로 토큰을 문자열로 받고, 두 번째 인수로 ConfigFactory 함수를 상속하는 타입 TFactory의 함수를 받아서
TFactory와 ConfigFactoryKeyHost를 합친 함수를 리턴.

emailConfig.ts에서는 email이라는 토큰으로 ConfigFactory를 등록할 수 있는 함수를 만듬.
*/
export default registerAs('email', () => ({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASSWORD,
  },
  baseUrl: process.env.EMAIL_BASE_URL,
}));
