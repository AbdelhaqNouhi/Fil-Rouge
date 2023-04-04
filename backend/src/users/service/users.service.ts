import { UsersModule } from './../users.module';
import { CreateUserDto } from '../../auth/dtos/CreateUser.dto';
import { User, UserDocument } from '../../Schema/User/users.schema';
import { Model } from 'mongoose';
import { Injectable, NotFoundException, BadRequestException, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { hashPassword } from '../../auth/utiles/bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModule: Model<UserDocument>) {}

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