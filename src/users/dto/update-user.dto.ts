import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    type: String,
    example: '',
  })
  @IsString()
  username: string;

  @ApiPropertyOptional({
    type: String,
    example: '',
  })
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    example: '',
  })
  @IsString()
  fristname: string;

  @ApiProperty({
    type: String,
    example: '',
  })
  @IsString()
  lastname: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()  
  age: number;
  
  @ApiProperty({
    type: Number,
  })
  @IsNumber()  
  coin: number;

  @ApiProperty({
    type: String,
    example: 'user',
  })
  @IsString()  
  type: string;

  @ApiProperty({
    type: String,
    example: 'true',
  })
  @IsString()  
  active: string;
}