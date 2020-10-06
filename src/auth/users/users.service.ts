import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  create({ email, password }: CreateUserDto): Promise<[User, boolean]> {
    return this.userModel.findOrCreate({
      where: {
        email
      },
      defaults: { password } 
    }); 
  }

  get(): Promise<User[]> {
    return this.userModel.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
  }

  findOne({ email, password }: CreateUserDto): Promise<User> {
    return this.userModel.findOne({
      where: {
        email, password
      }
    })
  }
}
