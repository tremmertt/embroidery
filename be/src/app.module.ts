import configuration from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbConfigService } from './config/mongo.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env'],
          isGlobal: true,
          cache: true,
          load: [configuration],
        }),
      ],
      useClass: MongodbConfigService,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
