import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  private userRepository: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async getByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
