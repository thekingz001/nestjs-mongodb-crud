import { CacheModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          store: redisStore,
          host: configService.get('redis.host'),
          port: configService.get('redis.port'),
        } as any),
      inject: [ConfigService],
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
