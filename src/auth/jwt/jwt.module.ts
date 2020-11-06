import { Module, Global } from '@nestjs/common';
import { JwtModule as JwtInitModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtInitModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: {
        expiresIn: 5 * 60
      }
    }),
  ],
  exports: [JwtInitModule]
})
export class JwtModule {}
