import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Dog } from './dogs.model';
import { CreateDogDto } from './dogs.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectModel(Dog)
    private dogModel: typeof Dog
  ) {}

  createOne(dog: CreateDogDto): Promise<Dog> {
    return this.dogModel.create(dog);
  }

  findAll(): Promise<Dog[]> {
    return this.dogModel.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
  }
}
