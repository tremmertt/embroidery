import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongodbConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  //You can retrun promise as well
  public createMongooseOptions(): MongooseModuleOptions {
    return {
      //MONGODB_URL is in .env file
      //MONGO_REPL_SET is in .env file
      //MONGO_AUTH_SOURCE is in .env file
      uri: `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?directConnection=true`,
      // this.configService.get<string>(
      //   `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?directConnection=true`,
      // ),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   replicaSet: this.configService.get<string>('MONGO_REPL_SET'),
      //   authSource: this.configService.get<string>('MONGO_AUTH_SOURCE'),
    };
  }
}
