import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private UserModel: typeof User
  ) {}

  create({ email, password }: CreateUserDto): Promise<[User, boolean]> {
    return this.UserModel.findOrCreate({
      where: {
        email
      },
      defaults: { password } 
    }); 
  }
}
