import {
  Injectable,
  CanActivate,
  ExecutionContext,
  forwardRef,
  Inject,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from './entities/role.enum';
import { UsersService } from './users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,

    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    @Inject(forwardRef(() => JwtService))
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    // requireRoles from api
    if (!requireRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const jwtFromRequest = request.headers.authorization;

    // get username and role
    const jwtDecoded = this.jwtService.decode(
      jwtFromRequest.replace('Bearer ', ''),
    );

    // check role
    return await this.userService
      .findByName({
        username: jwtDecoded['username'],
      })
      .then((user) => {
        if (user) {
          const hasRole = () => requireRoles.indexOf(user.role) > -1;
          let hasPermission = false;
          if (hasRole()) {
            hasPermission = true;
          }
          return user && hasPermission;
        }
        throw new ForbiddenException();
      });
  }
}
