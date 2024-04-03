import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';
import { AuthModule } from 'src/auth/auth.module';
import { CounterEntity } from './entities/counter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([CounterEntity])],
  controllers: [CounterController],
  providers: [CounterService],
})
export class CounterModule {}
