import { Logger, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
//NOTE:부트스트랩 과정에서 전역 필터를 적용하면 필터에 의존성 주입할 수 없는 제약이 생김
@Module({
  providers: [Logger, { provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class ExceptionModule {}
