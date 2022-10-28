import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')
@Controller('Auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
    ) {}
  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    // console.log(loginUserDto.username);
    const testt = await this.usersService.findOneauth(loginUserDto.username);
    console.log(testt);
    return this.authService.login(testt);
  }
}
