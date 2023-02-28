import { AuthGuard } from './../guard/auth/auth.guard';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Controller, Get, Post, Body, Req, Res, Param, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidateUserPipe } from '../pipes/validate-user/validate-user.pipe';

@Controller('users')
@UseGuards(AuthGuard)
@UsePipes(new ValidationPipe())

export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('getAll')
    GetAllUser() {
        return this.userService.GetAllUser();
    }

    @Post('create')
    CreateUser(@Body(ValidateUserPipe)  userData: CreateUserDto) {
        const user = this.userService.CreateUser(userData);
        return user;
    }

    @Get(':id')
    GetUserById(@Param('id') id: any) {
        const UserId = this.userService.GetUserById(id);
        return UserId;
    }
} 