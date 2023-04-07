import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/Schema/Role/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService,
    ) { }


    canActivate(context: ExecutionContext): boolean {
        const role = this.reflector.get<Role[]>('role', context.getHandler());
        if (!role) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        if (!token) {
            return false;
        }

        try {
            const decodedToken = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            const userRole = decodedToken.role;
            return role.includes(userRole);
        } catch (error) {
            return false;
        }
    }
}
