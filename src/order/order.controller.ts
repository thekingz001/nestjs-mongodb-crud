import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BooksService } from 'src/books/books.service';
import { UsersService } from 'src/users/users.service';
import { createOrderEntity } from './entities/create-order.entity';
import validateUserEntity from 'src/auth/entity/validate-user.entity';

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
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: createOrderEntity,
  })
  async create(@Req() req: string, @Body() createOrderDto: CreateOrderDto) {
    //ประกาศ Booksarray
    var booksarray = [];
    //หายอดทั้งหมด
    var total = 0;
    for (var i= 0; i< createOrderDto.books.length; i++){
      if ( createOrderDto.books[i]['amout'] == 0) {
        throw new BadRequestException('Amout not 0')
      }
      //ดึง Book
      const book = await this.booksService.findonebookbyname(createOrderDto.books[i]['bookname']);
      //รวมยอด
      total = total + (book[0]['price'] * createOrderDto.books[i]['amout']);
      //หักหนังสือ
      const newamount = book[0]['amount'] - createOrderDto.books[i]['amout'];
      const json_book = {
        "amount": newamount
      };
      this.booksService.updatebooksamount(String(book[0]['_id']),json_book);
      //สร้าง Booksarray
      booksarray.push(
        {
          bookname: book[0]['bookname'],
          price: book[0]['price'],
          booktype: book[0]['booktype'],
          amout: createOrderDto.books[i]['amout'],
          booktotal: book[0]['price'] * createOrderDto.books[i]['amout'],
        }
      )
    }
    //ดึง User
    const user = await this.usersService.findoneuser(req['user']['username']);
    if ( user['active'] !== "true") {
      throw new BadRequestException('You are banned')
    }
    if ( user['coin'] < total) {
      throw new BadRequestException('Coin not enough')
    }
    //หัก coin User
    const newcoin = user['coin'] - total;
    const user_id = String(user['_id']);
    const json_user = {
      coin: newcoin
    };
    await this.usersService.updateusercoin(user_id, json_user);
    //สร้าง query neworder
    const neworder = {
      customername: user['username'],
      books: booksarray,
      price: total,
    }
    return this.orderService.createorder(neworder);
  }

  @Get('getallorder')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async findallorder() {
    return this.orderService.findallorder();
  }

  @Get('getorderby:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async findoneorderbyid(@Param('id') id: string) {
    return this.orderService.findoerderbyid(id);
  }

  @Get('reportorder')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async reportordersgroupbybookname() {
    return this.orderService.findreportoerder();
  }

  @Delete('deleteorderby:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return this.orderService.removeorder(id);
  }
}
