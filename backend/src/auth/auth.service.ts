import { AuthDto } from './../users/dtos/Auth.dto';
import { UsersService } from './../users/service/users.service';
import { CreateUserDto } from './../users/dtos/CreateUser.dto';
import { hashPassword } from '../users/utiles/bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { User, UserDocument } from 'src/users/Schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) 
        private UserModule: Model<UserDocument>, 
        private jwtService: JwtService
    ) {}


    async CreateUser(userData: CreateUserDto) {
        const hashedPassword = hashPassword(userData.password);
        const newUser = new this.UserModule({ ...userData, password: hashedPassword });

        const userExist = await this.UserModule.findOne({ email: userData.email }).exec();
        if (userExist) {
            throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST);
        }
        const user = await newUser.save();
        if (!user) {
            throw new HttpException('User not created!', HttpStatus.BAD_REQUEST);
        }

        const token = this.jwtService.sign({
            id: user._id, 
            email: user.email, 
            firstName: user.firstName, 
            lastName: user.lastName
        });
        
        const LogUser = {
            token,
            email: user.email,
        }

        return LogUser;
    }


    async LoginUser(userData: AuthDto) {
        const { email, password } = userData;

        const user = await this.UserModule.findOne({ email });
        if (!user) {
            throw new HttpException('invalid email or password', HttpStatus.BAD_REQUEST);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password.toString());

        if (!isPasswordValid) {
            throw new HttpException('invalid email or password', HttpStatus.BAD_REQUEST);
        }

        const token = this.jwtService.sign({id: user._id});
        const LogUser = {
            token,
            email: user.email,
        }
        return LogUser;
    }
}
