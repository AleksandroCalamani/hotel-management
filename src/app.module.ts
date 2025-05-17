import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { Room } from './room/entities/room.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hotel-management',
      entities: [User, Room],
      synchronize: true,
    }),
    RoomModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
