import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import BooksEntity from './entities/bookadd.entity';

@ApiTags('Books')
@Controller('Books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post('addbook')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: BooksEntity
  })
  create(@Body() createBookDto: CreateBookDto) {
    //แปลงวันที่ จาก xxxx-xx-xx เป็น ISODATE
    const adddate = new Date(createBookDto.adddate);
    const newbook = { ...createBookDto, adddate };
    return this.booksService.create(newbook);
  }

  @Get('getallbook')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.booksService.findAll();
  }

  @Get('getonebookby:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Put('editbookby:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete('deletebookby:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
