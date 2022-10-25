import { Injectable } from '@nestjs/common';
import { InjectModel  } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schema/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { findUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// var test_data = [
//   {id:'1', name:'k1', type:'admin1'},
//   {id:'2', name:'k2', type:'admin2'},
//   {id:'3', name:'k3', type:'admin3'}
// ];
export type User = any;
@Injectable()
export class UsersService {
  // constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
  // async create(createUserDto: CreateUserDto): Promise<Users> {
    // return 'This action adds a new user';
    const createdUser = await this.usersModel.create(createUserDto);
    return createdUser;
    // return new this.usersModel.create(createdUser);
  }

  async findAll() {
    // return `This action returns all users`;
    return this.usersModel.find();
  }

  async findOne(id: string) {
    // console.log(typeof id)
    // return `This action returns a #${id} user`;
    return this.usersModel.find({ $or:[ {username: { $regex: '.*' + id + '.*' }}, {fristname: { $regex: '.*' + id + '.*' }} ]});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    // return this.usersModel.updateOne({_id: id},{$set: updateUserDto});
    // console.log(id , updateUserDto);
    // const tsss = '{"name": "test"}';
    return this.usersModel.updateOne({_id: id},{$set:updateUserDto});
  }

  async remove(id: number) {
    // return `This action removes a #${id} user`;
    return this.usersModel.remove({_id: id});
  }

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOneAuth(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}

export class UsersServiceAuth {

}