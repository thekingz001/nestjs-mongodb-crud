import { Module } from '@nestjs/common';
import { UsersService, UsersServiceAuth } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/schema/users.schema';
@Module({
  imports: [MongooseModule.forFeature([{ 
    name: Users.name,
    // username : Users.username,
    schema: UsersSchema
  }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
