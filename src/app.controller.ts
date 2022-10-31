import { Controller, Get, Post, UseGuards, Request, Inject, CACHE_MANAGER, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
// import Cache from 'cache-manager';
import { ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginUserDto } from './users/dto/login-user.dto';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
// import { LocalAuthGuard } from './auth/local-auth.guard';
@ApiTags('Login')
@Controller()
export class AppController {
  constructor(
    private appService: AppService, 
    private authService: AuthService,
    private usersService: UsersService
  ) {}
  @Get()
  getHello(): string {
    // let val = this.cacheManager.addAll();
    // let val = this.cacheManager.set("test", "a");
    // console.log(val);
    return this.appService.getHello();
  } 

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    // console.log(loginUserDto.username);
    const testt = await this.usersService.findOneauth(loginUserDto.username);
    console.log(testt);
    return this.authService.login(testt);
  }
}
