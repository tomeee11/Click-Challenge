import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CounterEntity } from './entities/counter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CounterService {
  constructor(
    @InjectRepository(CounterEntity)
    private counterRepository: Repository<CounterEntity>,
  ) {}

  async Increase(id: number): Promise<number> {
    let counter = await this.counterRepository.findOne({
      where: { user: { id } },
    });

    if (!counter) {
      counter = this.counterRepository.create({ user: { id }, count: 1 });
    } else {
      counter.count++;
    }

    await this.counterRepository.save(counter);

    return counter.count;
  }
}
