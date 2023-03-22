import { RolesGuard } from './guard/roles.guard';
import { JwtStrategy } from './utiles/Jwt.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../Schema/users.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv'; config();
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  PassportModule,
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '60s' },
  }),
],
controllers: [AuthController],
providers: [AuthService, JwtStrategy,
  {
    provide: APP_GUARD,
    useValue: RolesGuard,
  },
],
})
export class AuthModule {}
