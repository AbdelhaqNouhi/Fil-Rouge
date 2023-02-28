import { UsersController } from './users/controller/users.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/service/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './configuration/configuration';

@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/MaisonDatty'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
