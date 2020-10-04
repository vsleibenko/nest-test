import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDogDto, DogDto } from './dogs.dto';
import { DogsService } from './dogs.service';
import { Dog } from './dogs.model';

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
  async createDog(@Body() dog: CreateDogDto): Promise<Dog> {
    const createdDog = await this.dogsService.createOne(dog);

    return createdDog;
  }
}
