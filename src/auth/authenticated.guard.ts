import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any | boolean> {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated;
  }
}
