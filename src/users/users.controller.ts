import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import UserEntity from './entities/user.entity';

@ApiTags('Users')
@Controller('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserEntity,
  })
  @ApiBearerAuth()
  @ApiOperation({ summary: '' })
  @Post('add-users')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // const test = this.usersService.update(+id, updateUserDto);
    // console.log(updateUserDto);
    // this.usersService.update(+id, updateUserDto);
    return this.usersService.update(+id, updateUserDto);
    // return test;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
