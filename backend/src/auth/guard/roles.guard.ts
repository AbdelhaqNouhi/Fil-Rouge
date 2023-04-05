import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../../Schema/Role/role.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const token = request.headers.authorization.split(' ')[1];
        const decoded = this.jwtService.verify(token);
        const role = decoded.role;
        if (role === Role.Admin) {
            return true;
        }
        return false;
    }
}