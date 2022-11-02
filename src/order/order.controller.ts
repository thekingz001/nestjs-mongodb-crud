import { Controller, Get, Headers, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import jwt_decode from "jwt-decode";
import { BooksService } from 'src/books/books.service';
import { UsersService } from 'src/users/users.service';

@ApiTags('Buy')
@Controller('order')
export class OrderController {
  constructor(
    private  orderService: OrderService,
    private  booksService: BooksService,
    private  usersService: UsersService
    ) {}

  @Post()
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async create(@Headers() headers, @Body() createOrderDto: CreateOrderDto) {
    //ดึง Headers 
    const userAgent = headers;
    //ถอดรหัส Token
    const decodedHeader = jwt_decode(userAgent.authorization.replace('Bearer ',''), { header: true });
    const decoded = jwt_decode(userAgent.authorization.replace('Bearer ',''));
    //ดึงหนังสือ
    const book = await this.booksService.findBook(createOrderDto.book_name);
    //ดึง User
    const user = await this.usersService.findOneauth(decoded['username']);
    //หายอดทั้งหมด
    const total = book[0]['price'] * Number(createOrderDto.amount);
    //หักหนังสือ
    const newamount = book[0]['amount'] - createOrderDto.amount;
    const book_id = book[0]['_id'];
    const json_book = {
      "amount": newamount
    };
    console.log(book_id + JSON.stringify(json_book));
    this.booksService.update(String(book_id),json_book);
    //หักเงิน User
    const newcoin = user['coin'] - total;
    const user_id = user['_id'];
    const json_user = {
      "coin": newcoin
    };
    console.log(user_id + JSON.stringify(json_user));
    await this.usersService.update(String(user_id),json_user);

    const neworder = {
      order_name: user['username'],
      book_name: book[0]['book_name'],
      price: total,
      amount: createOrderDto.amount,
      book_type: book[0]['book_type']
    }
    // console.log(neworder);
    return this.orderService.create(neworder);
  }

  @Get('getAll-order')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.orderService.findAll();
  }

  @Get('getOrdeby:book_type')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('book_type') type: string) {
    console.log(type);
    return this.orderService.findOne(type);
  }

  // @Get('getOrderBy:type')
  // @ApiBearerAuth('defaultBearerAuth')
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(JwtAuthGuard)
  // async findOne(@Param('type') name: string) {
  //   return this.orderService.findOne(name);
  // }

  // @Patch(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  // @Delete(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
