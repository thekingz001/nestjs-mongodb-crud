import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Books, BooksDocument } from 'src/schema/books.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UpdateBooksamountDto } from './dto/update-bookmount.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books.name) private booksModel: Model<BooksDocument>) {}
  async create(createBooksDto: CreateBookDto): Promise<Books> {
    // return 'This action adds a new book';
    const createdBooks = await this.booksModel.create(createBooksDto);
    return createdBooks;
  }

  async findAll() {
    // return `This action returns all books`;
    return this.booksModel.find();
  }

  async findOne(id: string) {
    // return `This action returns a #${id} book`;
    return this.booksModel.find({book_name: { $regex: '.*' + id + '.*' }}).sort({amount:1,price:1});
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    // return `This action updates a #${id} book`;
    return this.booksModel.updateOne({_id: new Types.ObjectId(id)}, {$set:updateBookDto});
  }
  
  async updatebooksamount(id: string, updateBooksamountDto: UpdateBooksamountDto) {
    // return `This action updates a #${id} book`;
    return this.booksModel.updateOne({_id: new Types.ObjectId(id)}, {$set:updateBooksamountDto});
  }

  async remove(id: number) {
    // return `This action removes a #${id} book`;
    return this.booksModel.remove({_id: new Types.ObjectId(id)});
  }


  // async findBook(name: string) {
  //   const  book = this.booksModel.find({name});
  //   console.log(book);
  //   return book;
  // }

  async findBook(name: string) {
    // return `This action returns a #${id} book`;
    return this.booksModel.find({book_name: name});
  }
}
