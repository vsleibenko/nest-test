import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from './users/users.service';
import { CreateUserDto, UserDto } from './users/users.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('register')
  async login(@Body() user: CreateUserDto): Promise<void> {
    await this.usersService.create(user);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this.usersService.get();

    return users;
  }
}
