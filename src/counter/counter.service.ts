import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
  create() {
    return 'This action adds a new counter';
  }
}
