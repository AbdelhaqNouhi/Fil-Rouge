import { AuthDto } from '../dtos/Auth.dto';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { hashPassword } from '../utiles/bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/Schema/User/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import { Role } from 'src/Schema/Role/role.enum';
import { config } from 'dotenv'; config();


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

        if (newUser.email === process.env.ADMIN_EMAIL.toLocaleLowerCase()){
            newUser.role = Role.Admin;
        }

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

        const token = this.jwtService.sign({id: user._id, fiest_name: user.firstName, last_name: user.lastName});
        const LogUser = {
            token,
            email: user.email,
            first_name: user.firstName,
            last_name: user.lastName,
            role: user.role
        }
        return LogUser;
    }
}
