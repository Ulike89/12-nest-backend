import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        uri: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB_NAME
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}