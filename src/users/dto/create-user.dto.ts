import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator'
// const test = Math.floor(Math.random() * (0 - 9999999)) + 9999999;
export class CreateUserDto {
  // @ApiProperty({
  //   type: String,
  //   example: '',
  // })
  // @IsString()
  // _id: string;

  @ApiPropertyOptional({
    type: String,
    example: '',
  })
  @IsOptional()
  username: string;

  @ApiPropertyOptional({
    type: String,
    example: '',
  })
  @IsOptional()
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
    type: String,
    example: '',
  })
  @IsString()
  age: string;

  @ApiProperty({
    type: String,
    example: '',
  })
  @IsString()  
  type: string;

}
