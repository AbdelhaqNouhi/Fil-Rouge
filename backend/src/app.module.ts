import { UsersController } from './users/controller/users.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/service/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import configuration from './configuration/configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/MaisonDatty'),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
