import { Request } from 'express';
import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(request: Request) {
    const jwtString = request.headers.authorization.split('Bearer ')[1];

    const { userId } = await this.authService.verify(jwtString);

    (request as any).user = {
      id: userId,
    };

    return true;
  }
}
