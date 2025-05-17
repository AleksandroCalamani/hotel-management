import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // or your MySQL password
      database: 'hotel-management',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // this creates tables automatically
    }),
    RoomModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
