import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Dog } from'./dogs.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Dog])
  ],
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule {}
