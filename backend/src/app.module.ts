import { UsersController } from './users/controller/users.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/service/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import configuration from './configuration/configuration';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/MaisonDatty'),
    UsersModule,
    AuthModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
