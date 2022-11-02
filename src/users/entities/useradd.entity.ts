import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export default class UserEntity {
    // @ApiProperty({
    //   type: String,
    // })
    // @IsString()
    // _id: string;
  
    @ApiProperty({
      type: String,
      example: '',
    })
    @IsOptional()
    username: string;
  
    @ApiProperty({
      type: String,
      example: '',
    })
    @IsOptional()
    password: string;
  
    @ApiPropertyOptional({
      type: String,
      example: '',
    })
    @IsString()
    fristname: string;
  
    @ApiPropertyOptional({
      type: String,
      example: '',
    })
    @IsString()
    lastname: string;
  
    @ApiPropertyOptional({
      type: Number,
    })
    @IsString()
    age: number;
  
    @ApiPropertyOptional({
      type: String,
      example: '',
    })
    @IsString()  
    type: string;
  
  }