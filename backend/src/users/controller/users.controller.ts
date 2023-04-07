import { UsersService } from '../service/users.service';
import { Controller, Get, Post, Body, Req, Res, Param, UseGuards, UsePipes } from '@nestjs/common';
import { ValidateUserPipe } from '../../auth/pipes/validate-user.pipe';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { Role } from '../../Schema/Role/role.enum';
import { RolesGuard } from '../../auth/guard/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
@UsePipes(new ValidateUserPipe())

export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('getAll')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    GetAllUser() {
        return this.userService.GetAllUser();
    }

    @Get(':id')
    GetUserById(@Param('id') id: any) {
        const UserId = this.userService.GetUserById(id);
        return UserId;
    }
} 