import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    // @ApiProperty()
    // readonly  _id: string;
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
        example: '',
      })
      @IsString()
      age: number;
    
      @ApiProperty({
        type: String,
        example: '',
      })
      @IsString()  
      type: string;
}
