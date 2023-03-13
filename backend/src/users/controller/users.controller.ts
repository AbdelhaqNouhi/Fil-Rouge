import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Controller, Get, Post, Body, Req, Res, Param, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateUserPipe } from '../pipes/validate-user/validate-user.pipe';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
@UsePipes(new ValidationPipe())

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