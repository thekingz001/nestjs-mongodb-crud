import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import UserEntity from './entities/create-user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('Users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
    ) {}

  @Post('adduser')
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserEntity,
  })
  createuser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createuser(createUserDto);
  }

  @Get('getalluser')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  findalluser() {
    return this.usersService.findalluser();
  }

  @Get('getnewuser')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  findnewuser() {
    return this.usersService.findnewuser();
  }

  @Get('getoneuser:name')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  findoneuser(@Param('name') name: string) {
    return this.usersService.findoneuser(name);
  }

  @Put('edit:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  updateuser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateuser(id, updateUserDto);
  }
  
  @Delete('delete:id')
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.removeuser(id);
  }
}
