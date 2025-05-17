import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async getByEmail(email: string): Promise<User | null> {
    return await this.findOne({
      where: {
        email: email,
      },
    });
  }
}
