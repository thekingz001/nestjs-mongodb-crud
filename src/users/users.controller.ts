import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import UserEntity from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('Users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
    ) {}
  @Post('Add-users')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserEntity,
  })
  @ApiOperation({ summary: '' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('getAll-users')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiOperation({ summary: '' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('getNew-users')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiOperation({ summary: '' })
  findNew() {
    return this.usersService.findNew();
  }

  @Get('getOne-users:name')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiOperation({ summary: '' })
  findOne(@Param('name') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('edit:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // const test = this.usersService.update(+id, updateUserDto);
    console.log(updateUserDto);
    // this.usersService.update(+id, updateUserDto);
    return this.usersService.update(id, updateUserDto);
    // return test;
  }
  
  @Delete('delete:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
