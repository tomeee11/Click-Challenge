import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CounterService } from '../application/counter.service';
import { AuthGuard } from 'src/auth.guard';
import { CustomRequest } from 'src/custom.request';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @UseGuards(AuthGuard)
  @Post('/count')
  async count(@Req() req: CustomRequest): Promise<number> {
    const id = req.user.id;

    const count = await this.counterService.Increase(+id);

    return count;
  }
}
