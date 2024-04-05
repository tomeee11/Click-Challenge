import { Injectable } from '@nestjs/common';
import { CounterRepository } from '../infra/DB/repository/Counter.repository';

@Injectable()
export class CounterService {
  constructor(private counterRepository: CounterRepository) {}

  async Increase(id: number): Promise<number> {
    let counter = await this.counterRepository.findOneByUserId(id);

    if (!counter) {
      counter = await this.counterRepository.create(id, 1);
    } else {
      counter.count++;
    }

    await this.counterRepository.save(counter);

    return counter.count;
  }
}
