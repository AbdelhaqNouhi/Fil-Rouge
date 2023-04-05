import { SetMetadata } from '@nestjs/common';
import { Role } from '../Schema/Role/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);