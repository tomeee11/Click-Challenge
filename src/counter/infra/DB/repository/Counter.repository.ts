import { ICounterRepository } from 'src/counter/domain/repository/icounter.repository';
import { CounterEntity } from '../entities/counter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CounterRepository implements ICounterRepository {
  constructor(
    @InjectRepository(CounterEntity)
    private counterRepository: Repository<CounterEntity>,
  ) {}

  async findOneByUserId(id: number): Promise<CounterEntity | null> {
    const counterEntity = await this.counterRepository.findOne({
      where: { user: { id } },
    });

    if (!counterEntity) {
      return null;
    }

    return counterEntity;
  }

  async create(id: number, count: number): Promise<CounterEntity> {
    const counter = this.counterRepository.create({ user: { id }, count });
    return this.counterRepository.save(counter);
  }

  async save(counter: CounterEntity): Promise<void> {
    await this.counterRepository.save(counter);
  }
}
