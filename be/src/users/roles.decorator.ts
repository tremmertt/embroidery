import { SetMetadata } from '@nestjs/common';
import { Role } from './entities/role.enum';

export const hasRole = (...roles: Role[]) => SetMetadata('roles', roles);
