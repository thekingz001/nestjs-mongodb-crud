import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

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
      const user = await this.usersService.findonegetuser(loginUserDto.username);
      return this.authService.login(user);
    }

    @ApiBearerAuth('defaultBearerAuth')
    @UseGuards(JwtAuthGuard)
    @Get('user-info')
    getUserInfo(@Request() req) {
      return req.user
    }
}
