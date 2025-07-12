import { BadRequestException, Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import { UserRepository } from 'src/user/user.repository';
import { ErrorMessage } from 'src/core/error-message';
import bcrypt from 'bcrypt';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';

const saltRounds: number = 10;
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    console.log(`user with email ${loginDto.email} attempted to login`);
    const user = await this.userRepository.getByEmail(loginDto.email);
    if (!user) {
      console.error(`user with email ${loginDto.email} does not exist`);
      throw new BadRequestException(ErrorMessage.WRONG_CREDENTIALS);
    }

    const match = await bcrypt.compare(loginDto.password, user.password);
    if (!match) {
      console.error(`WRONG PASSWORD FOR USER WITH EMAIL ${loginDto.email}`);
      throw new BadRequestException(ErrorMessage.WRONG_CREDENTIALS);
    }

    return this.accesToken(plainToInstance(LoginResponseDto, user));
  }

  async accesToken(
    loginResponseDto: LoginResponseDto,
  ): Promise<LoginResponseDto> {
    loginResponseDto.accesToken = this.jwtService.sign({
      username: loginResponseDto.email,
      userId: loginResponseDto.id,
    });
    return loginResponseDto;
  }
}
