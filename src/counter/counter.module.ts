import { Module } from '@nestjs/common';
import { CounterService } from './application/counter.service';
import { CounterController } from './interface/counter.controller';
import { AuthModule } from 'src/auth/auth.module';
import { CounterEntity } from './infra/DB/entities/counter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterRepository } from './infra/DB/repository/Counter.repository';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([CounterEntity])],
  controllers: [CounterController],
  providers: [CounterService, CounterRepository],
})
export class CounterModule {}
