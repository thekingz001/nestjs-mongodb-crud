import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { OrderModule } from './order/order.module';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/nestJS'), UsersModule, AuthModule],
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestJS'), 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    UsersModule, 
    BooksModule, 
    AuthModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}