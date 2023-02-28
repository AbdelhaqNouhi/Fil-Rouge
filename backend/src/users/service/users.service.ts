import { UsersModule } from './../users.module';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { User, UserDocument } from '../Schema/users.schema';
import { Model } from 'mongoose';
import { Injectable, NotFoundException, BadRequestException, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { hashPassword } from '../utiles/bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModule: Model<UserDocument>) {}

    async CreateUser(userData: CreateUserDto) {
        const hashedPassword = hashPassword(userData.password);
        const newUser = new this.UserModule({ ...userData, password: hashedPassword });

        const userExist = await this.UserModule.findOne({ email: userData.email }).exec();
        if(userExist) {
            throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST);
        }
        const user = await newUser.save();
        if(!user) {
            throw new HttpException('User not created!', HttpStatus.BAD_REQUEST);
        }
        return user;
    }

    async GetAllUser() {
        const UserData = await this.UserModule.find().exec();
        if(!UserData || UserData.length == 0) {
            throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
        }
        return UserData;
    }

    async GetUserById(id: number) {
        const UserId = await this.UserModule.findById(id).exec();

        if(!UserId) {
            throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
        }
        return UserId;
    }
}