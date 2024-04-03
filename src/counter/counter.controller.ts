import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CounterService } from './counter.service';
import { AuthGuard } from 'src/auth.guard';
import { CustomRequest } from 'src/custom.request';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @UseGuards(AuthGuard)
  @Post('/count')
  async count(@Req() req: CustomRequest): Promise<void> {
    const id = req.user.id;

    await this.counterService.Increase(+id);
  }
}
