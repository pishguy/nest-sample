//import 'dotenv/config';
import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {TypeOrmModule} from '@nestjs/typeorm';
const port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    Logger.log(`server started on ${port}`, 'Bootstrap');

}

bootstrap();
