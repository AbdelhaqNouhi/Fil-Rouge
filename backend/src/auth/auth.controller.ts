import { AuthDto } from './../users/dtos/Auth.dto';
import { CreateUserDto } from './../users/dtos/CreateUser.dto';
import { AuthService } from './auth.service';
import { ValidateUserPipe } from './../users/pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './../users/guard/auth/auth.guard';
import { Controller, UseGuards, UsePipes, Post, Body } from '@nestjs/common';

@Controller('auth')
@UseGuards(AuthGuard)
@UsePipes(new ValidateUserPipe())

export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('create')
    CreateUser(@Body(ValidateUserPipe) userData: CreateUserDto) {
        return this.authService.CreateUser(userData);
    }

    @Post('login')
    LoginUser(@Body(ValidateUserPipe) userData: AuthDto) {
        return this.authService.LoginUser(userData);
    }
}
