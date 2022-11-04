import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { identity } from 'rxjs';
import { BooksService } from 'src/books/books.service';
import { Books, BooksDocument } from 'src/books/schema/books.schema';
import { Order, OrdersDocument } from 'src/order/schema/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private ordersModel: Model<OrdersDocument>
  ) {}
  async createorder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersModel.create(createOrderDto);
  }

  async findallorder() {
    return this.ordersModel.find();
  }

  async findoerderbytype(type: string) {    
    return this.ordersModel.find({book_type: type});
  }


  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersModel.updateOne({_id: new Types.ObjectId(id)},{$set:updateOrderDto});
  }

  async removeorder(id: string) {
    return this.ordersModel.remove({_id: new Types.ObjectId(id)});
  }
}
