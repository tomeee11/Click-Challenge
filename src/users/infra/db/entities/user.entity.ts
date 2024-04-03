import { CounterEntity } from 'src/counter/entities/counter.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
/* NOTE:
 @Entity('User')으로 진행하였을 때, [Nest] QueryFailedError: Table 'user' already exists  에러 발생
 최신 버전에서 Mysql은 대문자로 구성된 테이블을 허용하지 않는다.
 참고 https://github.com/typeorm/typeorm/issues/4420
*/
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 60 })
  email: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 60 })
  signupVerifyToken: string;

  @OneToMany(() => CounterEntity, (counter) => counter.user)
  counters: CounterEntity;
}
