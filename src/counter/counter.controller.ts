import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CounterService } from './counter.service';
import { AuthGuard } from 'src/auth.guard';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @UseGuards(AuthGuard)
  @Post('count')
  create(@Req() req: any) {
    console.log(req);
    return this.counterService.create();
  }
}
