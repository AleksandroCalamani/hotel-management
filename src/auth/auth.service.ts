import { Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(loginDto: LoginDto) {}
}
