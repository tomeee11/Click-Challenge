import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async createUser(dto: CreateUserDto) {
    //이메일 중복 체크
    await this.checkUserExists(dto.email);

    await this.saveUser(dto);
    await this.sendMemberJoinEmail(dto.email);
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB 연동 후 구현
  }

  private saveUser(dto) {
    return; // TODO: DB 연동 후 구현
  }
}
