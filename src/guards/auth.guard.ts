import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (token) {
      const userProfile = await this.decodeToken(token);

      request['user'] = userProfile;

      return true;
    }
    return false;
  }
  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
  private async decodeToken(token: string) {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: `${process.env.JWT_SECRET}`,
    });
    return payload;
  }
}
