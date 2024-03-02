import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { NotIn } from 'src/utils/decorators/not-in';

export class CreateUserDto {
  @Transform((params) => params.value.trim())
  //생성한 커스텀 데코레이터 적용
  //NOTE: class-validator, class-transformer 문서 확인
  @NotIn('password', {
    message: 'password에는 name과 같은 문자열을 포함할 수 없습니다.',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @Transform(({ value, obj }) => {
    // if (obj.password.includes(obj.name.trim())) {
    //   throw new BadRequestException('password는 name과 같은 문자열을 포함할 수 없습니다.');
    // }
    return value.trim();
  })
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;
  //영문 대소문자, 숫자 또는 특수문자로 이루어진 8 이상 30자 이하 문자열
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}
