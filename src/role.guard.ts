import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   console.log('Role');
  //   return true;
  // }

  canActivate(context: ExecutionContext): boolean {
    console.log('Role');
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    console.log(roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // console.log(request, user);
    // 在这拿到用户标识信息  在这查权限
    return true;
  }
}
