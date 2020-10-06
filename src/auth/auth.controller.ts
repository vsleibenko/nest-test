import { Controller, Post, Body, Get, HttpException, Res } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { UsersService } from './users/users.service';
import { CreateUserDto, UserDto, LoginUserDto, LoginSuccessDto } from './users/users.dto';
import { JwtService } from '@nestjs/jwt';
import { SessionService } from './session/session.service';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private sessionService: SessionService
  ) {}

  @Post('register')
  async register(@Body() user: CreateUserDto): Promise<void> {
    await this.usersService.create(user);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this.usersService.get();

    return users;
  }

  @ApiCreatedResponse({ type: LoginSuccessDto })
  @Post('login')
  async login(@Body() user: LoginUserDto, @Res() res: Response): Promise<void> {
    const userFound: UserDto = await this.usersService.findOne(user);
    if (!userFound) throw new HttpException('User not found or password is wrong', 403);

    const session = await this.sessionService.createSession({
      fingerprint: user.fingerprint,
      userId: userFound.id,
    });

    const accessToken = await this.jwtService.signAsync({ userId: userFound.id });

    res.cookie('refreshToken', session.refreshToken, {
      signed: true,
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/auth'
    });

    res.status(201).send({ accessToken });
  }
}
