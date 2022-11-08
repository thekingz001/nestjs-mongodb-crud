import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import loginUserEntity from './entity/login-user.entity';
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
    @ApiResponse({
      status: 200,
      description: 'Success',
      type: loginUserEntity
    })
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
