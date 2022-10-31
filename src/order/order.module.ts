import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrdersSchema } from 'src/schema/order.schema'
import { BooksModule } from 'src/books/books.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Order.name,
      // username : Users.username,
      schema: OrdersSchema
    }]),
    BooksModule,
    UsersModule
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
