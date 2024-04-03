import { UserEntity } from 'src/users/infra/db/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('counter')
export class CounterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  count: number;

  @ManyToOne(() => UserEntity, (user) => user.counters)
  user: UserEntity;
}
