import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
      const user = await this.usersService.findOneauth(username)
      if(user && await user.password === password) {
          const { password, ...result } = user
          const myObjectId = result._doc._id;
        //   const re = JSON.parse(result);
          console.log(result._doc);
          console.log(JSON.stringify(myObjectId));
          
          return user
      }else{
        
        return null
      }

    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
