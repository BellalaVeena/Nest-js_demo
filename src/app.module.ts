import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductModule} from './products/products.module'

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb://localhost/nestdemo')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
