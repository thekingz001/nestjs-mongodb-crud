import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { Cache } from 'cache-manager'
import { compearPassword } from './bcrypt/bcrypt';
import { ValidateUserDto } from './dto/validate-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import validateUserEntity from './entity/validate-user.entity';

@Injectable()
export class AuthService {
  @Inject(CACHE_MANAGER) private cacheManager: Cache
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string) {
      const user = await this.usersService.findonegetuser(username);
      const value = Number(await this.cacheManager.get(`${ user.username}-auth-fail`));      
      if(user && user.active === 'true' && value <= 2) {
        const matchedUser = compearPassword(password, user.password)
        if (matchedUser) {
          this.cacheManager.del(`${ user.username}-auth-fail`);
          return user;
        }
        else{
          if (!value) {
            await this.cacheManager.set(`${ user.username}-auth-fail`,1, { ttl: 120 });
          }
          else{
            await this.cacheManager.set(`${ user.username}-auth-fail`,value+1, { ttl: 30 });
          }
          return null;
        }
      }
    }

    async login(user: validateUserEntity) {
        const payload = { username: user.username, sub: JSON.stringify(user._id) };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
