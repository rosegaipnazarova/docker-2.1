import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
  ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
  TypeOrmModule.forRoot({ 
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
