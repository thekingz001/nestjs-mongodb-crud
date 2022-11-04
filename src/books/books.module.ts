import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BooksSchema } from 'src/books/schema/books.schema';

@Module({
  imports: [MongooseModule.forFeature([{ 
    name: Books.name,
    // username : Users.username,
    schema: BooksSchema
  }])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService]
})
export class BooksModule {}
