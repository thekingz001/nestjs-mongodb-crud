import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/nestJS'), UsersModule, AuthModule],
  imports: [MongooseModule.forRoot('mongodb://localhost/nestJS'), UsersModule, BooksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}