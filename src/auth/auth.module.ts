import { CacheModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store'
import configuration from 'src/config/configuration';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    JwtModule.register({
      secret: `${process.env.SECRETKEY}`,
      signOptions: { expiresIn: '1d' },
    }),
    CacheModule.register({
      store: redisStore,
    }),
],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy
  ],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
