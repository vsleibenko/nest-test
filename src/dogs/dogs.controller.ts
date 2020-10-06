import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDogDto, DogDto } from './dogs.dto';
import { DogsService } from './dogs.service';

@ApiTags('dogs')
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
