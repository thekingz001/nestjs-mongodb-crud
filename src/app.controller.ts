import { Controller, Get, Post, UseGuards, Request, Inject, CACHE_MANAGER, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import Cache from 'cache-manager';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginUserDto } from './users/dto/login-user.dto';
import { AuthService } from './auth/auth.service';
// import { LocalAuthGuard } from './auth/local-auth.guard';
@ApiTags('Login')
@Controller()
export class AppController {
  constructor(
    private appService: AppService, 
    private authService: AuthService
  ) {}
  // constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache{}
  // constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache{}
  // @Inject(CACHE_MANAGER) private cacheManager: Cache
  @Get()
  getHello(): string {
    // let val = this.cacheManager.addAll();
    // let val = this.cacheManager.set("test", "a");
    // console.log(val);
    return this.appService.getHello();
    
  } 
  
  // @UseGuards(AuthGuard('local'))
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Body() loginUserDto: LoginUserDto) {
  //   // return this.authService.login_test(loginUserDto.username);
  //   return loginUserDto.username;
  // }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/logintest')
  // async logintest(@Body() loginUserDto: LoginUserDto) {
  //   return loginUserDto.username;
  // }
  

  // @UseGuards(JwtAuthGuard)
  // @Post('auth/login')
  // async login_test(@Body() loginUserDto: LoginUserDto) {
  //   return loginUserDto.username;
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @UseGuards(JwtAuthGuard)
  // @Post('auth/login_jwt')
  // async login_jwt(@Body() loginUserDto: LoginUserDto) {
  //   return loginUserDto.username;
  // }
}
