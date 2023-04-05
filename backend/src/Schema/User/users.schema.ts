import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Role } from '../Role/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    firstName: String;

    @Prop({ required: true })
    lastName: String;

    @Prop({ required: true })
    email: String;

    @Prop({ required: true })
    phone: Number;

    @Prop({ required: true })
    password: String;
    
    @Prop()
    address: String;

    @Prop({ default: Role.User, enum: [Role.Admin, Role.User] })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User)