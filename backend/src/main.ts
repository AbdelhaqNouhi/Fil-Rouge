import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './configuration/configuration';
import * as dotenv from 'dotenv';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config(); 
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
