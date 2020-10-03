import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDogDto } from './dogs.dto';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return 'this is dog GET';
  }

  @Post()
  createDog(@Body() dog: CreateDogDto) {
    console.log(dog);
  }
}
