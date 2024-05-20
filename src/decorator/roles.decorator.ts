import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../guards/role.enum';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
