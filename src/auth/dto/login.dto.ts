import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export default class LoginDto {
  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  password: string;
}
