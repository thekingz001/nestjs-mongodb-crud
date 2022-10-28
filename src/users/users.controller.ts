import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Headers, UnauthorizedException } from '@nestjs/common';
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
  @Post('add-users')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserEntity,
  })
  @ApiOperation({ summary: '' })
  create(@Headers() headers:any, @Body() createUserDto: CreateUserDto) {
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
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // const test = this.usersService.update(+id, updateUserDto);
    // console.log(updateUserDto);
    // this.usersService.update(+id, updateUserDto);
    return this.usersService.update(id, updateUserDto);
    // return test;
  }
  @Delete(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
