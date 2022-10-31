import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { identity } from 'rxjs';
import { BooksService } from 'src/books/books.service';
import { Books, BooksDocument } from 'src/schema/books.schema';
import { Order, OrdersDocument } from 'src/schema/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private ordersModel: Model<OrdersDocument>
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    // return 'This action adds a new order';
    return this.ordersModel.create(createOrderDto);
  }

  async findAll() {
    // return `This action returns all order`;
    return this.ordersModel.find();
  }

  async findOne(id: string) {
    // return `This action returns a #${id} order`;
    return this.ordersModel.find({_id: id});
  }


  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersModel.updateOne({_id: id},{$set:updateOrderDto});
  }

  async remove(id: string) {
    return this.ordersModel.remove({_id: id});
  }
}
