import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return 'this is dog GET';
  }
}
