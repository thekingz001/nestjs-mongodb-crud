import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
export default class loginUserEntity {  
    @ApiProperty({
      type: String,
      example: '',
    })
    @IsString()
    username: string;
  
    @ApiProperty({
      type: String,
      example: '',
    })
    @IsString()
    password: string;

  }