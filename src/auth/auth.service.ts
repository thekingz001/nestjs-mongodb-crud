import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { Cache } from 'cache-manager'

@Injectable()
export class AuthService {
  @Inject(CACHE_MANAGER) private cacheManager: Cache
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
      const user = await this.usersService.findOneauth(username);
      const value = Number(await this.cacheManager.get(`${ user.username}-auth-fail`));
      // console.log(value);
      if(user && await user.password === password && user.active === 'true' && value <= 2) {
          const { password, ...result } = user;
          const myObjectId = result._doc._id;
        //   const re = JSON.parse(result);
          // console.log(result._doc);
          // console.log(JSON.stringify(myObjectId));
          this.cacheManager.del(`${ user.username}-auth-fail`);
          return user
      }else{
        if (!value) {
          await this.cacheManager.set(`${ user.username}-auth-fail`,1, { ttl: 60 * 2 });
        }
        else{
          await this.cacheManager.set(`${ user.username}-auth-fail`,value+1, { ttl: 30 });
        }
        // console.log("LoginFail");
        return null
      }

    }

    async login(user: any) {      
        const payload = { username: user.username, sub: JSON.stringify(user._id) };
        // console.log(payload);
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
