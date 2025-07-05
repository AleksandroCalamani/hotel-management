import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class LoginResponseDto {
  @Expose()
  @IsNumber()
  userId: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  accesToken: string;
}
