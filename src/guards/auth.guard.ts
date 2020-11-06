import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
  ) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    try {
      console.log(context.switchToHttp().getRequest().headers.authorization);
      const token = await this.jwtService.verifyAsync(context.switchToHttp().getRequest().headers.authorization.split(' ')[1]);
      console.log(token);
    } catch (e) {
      console.log(e.message);
    }

    // console.log(context.switchToHttp().getRequest().signedCookies.refreshToken);
    return true;
  }
}
