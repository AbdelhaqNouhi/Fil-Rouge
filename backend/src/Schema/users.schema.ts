import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { Role, RoleSchema } from './role.schema';

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
    
    @Prop({ required: true })
    adress: String;

    @Prop({ type: [{ type: RoleSchema }] })
    roles: Role[];

}

export const UserSchema = SchemaFactory.createForClass(User)