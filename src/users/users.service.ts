import { Injectable } from '@nestjs/common';
import { InjectModel  } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Users, UsersDocument } from 'src/schema/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUsercoinDto } from './dto/update-usercoin.dto';

// var test_data = [
//   {id:'1', name:'k1', type:'admin1'},
//   {id:'2', name:'k2', type:'admin2'},
//   {id:'3', name:'k3', type:'admin3'}
// ];

@Injectable()
export class UsersService {
  // constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
  // async create(createUserDto: CreateUserDto): Promise<Users> {
    // return 'This action adds a new user';
    const createdUser = await this.usersModel.create(createUserDto);
    console.log('Add User Succeed');
    
    return createdUser;
    // return new this.usersModel.create(createdUser);
  }

  async findAll(): Promise<any> {
    // return `This action returns all users`;
    // return this.usersModel.find();
    // const { page, perPage = 1000 } = pagination
    return this.usersModel
      .find()
      .sort( { fristname: 1 } )
      .skip( 1 > 0 ? ( ( 1 - 1 ) * 1000 ) : 0 )
      .limit( 1000 );
  }

  async findOne(id: string) {
    // console.log(typeof id)
    // return `This action returns a #${id} user`;
    return this.usersModel.find({ $or:[ {username: { $regex: '.*' + id + '.*' }}, {fristname: { $regex: '.*' + id + '.*' }}, {lastname: { $regex: '.*' + id + '.*' }} ]});
  }

  async findNew() {
    // console.log(typeof id)
    // return `This action returns a #${id} user`;
    // const today = new Date();
    // const yyyy = today.getFullYear();
    // const mm = today.getMonth() + 1; // Months start at 0!
    // const dd = today.getDate();
    // const formattedToday = dd + '/' + mm + '/' + yyyy;

    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    return this.usersModel.find({ createdAt: 
      {
        $gte: start,
        $lte: end
      }
    });
  }  

  async update(id: string, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    // return this.usersModel.updateOne({_id: new Types.ObjectId(id)},{$set: updateUserDto});
    // console.log(id , updateUserDto);
    // const tsss = '{"name": "test"}';
    // const test = this.usersModel.updateOne({_id: id},{$set:updateUserDto});
    // console.log(test);
    
    return this.usersModel.updateOne({_id: new Types.ObjectId(id)}, {$set:updateUserDto});
  }

  async updateusercoin(id: string, updateUsercoinDto: UpdateUsercoinDto) {
    return this.usersModel.updateOne({_id: new Types.ObjectId(id)}, {$set:updateUsercoinDto});
  }

  async remove(id: string) {
    // return `This action removes a #${id} user`;
    return this.usersModel.remove({_id: new Types.ObjectId(id)});
  }

  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  //   {
  //     userId: 3,
  //     username: 'k',
  //     password: '123',
  //   },
  // ];

  async findOneauth(username: string): Promise<any | undefined> {
    return this.usersModel.findOne({ username });
  }
}
export class UsersServiceAuth {

}
