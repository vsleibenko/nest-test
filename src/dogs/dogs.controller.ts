import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDogDto, DogDto } from './dogs.dto';
import { DogsService } from './dogs.service';
import { AuthGuard } from '../guards/auth.guard'; 

@ApiTags('dogs')
@UseGuards(AuthGuard)
@Controller('dogs')
export class DogsController {
  constructor(
    private dogsService: DogsService
  ) {}

  @Get()
  async findAll(): Promise<DogDto[]> {
    const dogs = await this.dogsService.findAll();

    return dogs;
  }

  @Post()
  async createDog(@Body() dog: CreateDogDto): Promise<DogDto> {
    const createdDog = await this.dogsService.createOne(dog);

    return createdDog;
  }
}
