import { CounterEntity } from 'src/counter/infra/DB/entities/counter.entity';

export interface ICounterRepository {
  findOneByUserId: (id: number) => Promise<CounterEntity | null>;
  create: (id: number, count: number) => Promise<CounterEntity>;
  save: (counter: CounterEntity) => Promise<void>;
}
