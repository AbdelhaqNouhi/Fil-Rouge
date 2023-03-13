import { AuthDto } from '../../users/dtos/Auth.dto';
import { CreateUserDto } from '../../users/dtos/CreateUser.dto';
import { AuthService } from '../service/auth.service';
import { ValidateUserPipe } from '../../users/pipes/validate-user/validate-user.pipe';
import { Controller, UseGuards, UsePipes, Post, Body } from '@nestjs/common';

@Controller('auth')
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
