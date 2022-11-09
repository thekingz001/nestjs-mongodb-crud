import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString } from "class-validator";
export default class loginUserEntity {  
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

  }