import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator'
export class CreateUserDto {
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

}
