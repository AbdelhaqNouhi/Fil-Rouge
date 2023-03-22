import { UsersService } from '../service/users.service';
import { Controller, Get, Post, Body, Req, Res, Param, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateUserPipe } from '../../auth/pipes/validate-user.pipe';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
@UsePipes(new ValidateUserPipe())

export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('getAll')
    GetAllUser() {
        return this.userService.GetAllUser();
    }

    @Get(':id')
    GetUserById(@Param('id') id: any) {
        const UserId = this.userService.GetUserById(id);
        return UserId;
    }
} 