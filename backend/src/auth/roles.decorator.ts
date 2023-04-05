import { SetMetadata } from '@nestjs/common';
import { Role } from '../Schema/Role/role.enum';

export const Roles = (...role: Role[]) => SetMetadata('role', role);