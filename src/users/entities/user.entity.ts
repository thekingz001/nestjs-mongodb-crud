import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export default class UserEntity {
    // @ApiProperty({
    //   type: String,
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