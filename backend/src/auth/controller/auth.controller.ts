import { User } from '../../Schema/User/users.schema';
import { AuthDto } from '../dtos/Auth.dto';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { AuthService } from '../service/auth.service';
import { ValidateUserPipe } from '../pipes/validate-user.pipe';
import { Controller, UseGuards, UsePipes, Post, Body, Header } from '@nestjs/common';

@Controller('auth')
@UsePipes(new ValidateUserPipe())

export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('create')
    // @Header('Access-Control-Allow-Origin', 'POST')
    CreateUser(@Body(ValidateUserPipe) userData: CreateUserDto) {
        return this.authService.CreateUser(userData);
    }
    
    @Post('login')
    // @Header('Access-Control-Allow-Origin', 'POST')
    LoginUser(@Body(ValidateUserPipe) userData: AuthDto) {
        return this.authService.LoginUser(userData);
    }
}
