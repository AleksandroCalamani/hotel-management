import { BadRequestException, Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import { UserRepository } from 'src/user/user.repository';
import { ErrorMessage } from 'src/core/error-message';

const saltRounds: number = 10;

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.getByEmail(loginDto.email);
    if(!user){
      throw new BadRequestException(ErrorMessage.WRONG_CREDENTIALS)
    }
  }
}
