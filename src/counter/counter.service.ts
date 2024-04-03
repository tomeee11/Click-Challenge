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
  async Increase(id: number): Promise<void> {
    // this.counterRepository.
  }
}
