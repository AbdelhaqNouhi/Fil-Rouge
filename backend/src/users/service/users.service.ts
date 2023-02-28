import { UsersModule } from './../users.module';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { User, UserDocument } from '../Schema/users.schema';
import { Model } from 'mongoose';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
            throw new BadRequestException('User already exist!');
        }
        const user = await newUser.save();
        if(!user) {
            throw new BadRequestException('User not created!');
        }
        return user;
    }

    async GetAllUser() {
        const UserData = await this.UserModule.find().exec();
        if(!UserData || UserData.length == 0) {
            throw new NotFoundException('Users data not found!');
        }
        return UserData;
    }

    async LoginUser(userData: CreateUserDto) {
        
    }
}