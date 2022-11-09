import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order, OrdersDocument } from 'src/order/schema/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private ordersModel: Model<OrdersDocument>
  ) {}
  async createorder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersModel.create(createOrderDto);
  }

  async findallorder() {
    return this.ordersModel.find().lean();
  }

  async findoerderbyid(id: string) {    
    return this.ordersModel.find({_id: id}).lean();
  }
  
  async findreportoerder() {    
    return this.ordersModel.aggregate(
      [
        {
          $unwind: "$books"
        },
        {
          $group: {
            _id: {
              bookname: "$books.bookname"
            },
            "sumAmout": {
              $sum: "$books.amout"
            },
            "sumPrice": {
              $sum: "$books.booktotal"
            }
          }
        },
        {
          "$group": {
            "_id": 0,
            "data": {
              $addToSet: {
                "bookname": "$_id.bookname",
                "sumAmout": "$sumAmout",
                "sumPrice": "$sumPrice"
              }
            },
          },
        },
        {
          $unwind: "$data",
        },
        {
          $sort: {
            'data.bookname': 1,
          }
        },
      ]
    );
  }

  async removeorder(id: string) {
    return this.ordersModel.remove({_id: new Types.ObjectId(id)});
  }
}
