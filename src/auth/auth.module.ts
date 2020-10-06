import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth.controller';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: {
        expiresIn: 10 * 60
      }
    }),
    UsersModule,
    SessionModule
  ],
  controllers: [AuthController],
})
export class AuthModule {}
