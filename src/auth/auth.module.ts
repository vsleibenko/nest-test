import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth.controller';
import { SessionModule } from './session/session.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [
    UsersModule,
    SessionModule,
    JwtModule
  ],
  controllers: [AuthController],
})
export class AuthModule {}
