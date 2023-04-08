import { JwtStrategy } from './utiles/Jwt.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../Schema/User/users.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../auth/guard/roles.guard';
import { config } from 'dotenv'; config();

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  PassportModule,
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '24h' },
  }),
],
controllers: [AuthController],
providers: [AuthService, JwtStrategy,
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
],

})
export class AuthModule {}
