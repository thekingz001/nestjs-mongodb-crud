import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
export default class validatepayloadUserEntity {  

  @ApiProperty({
    type: String,
    example: '',
  })
  @IsString()
  sub: string;

    @ApiProperty({
      type: String,
      example: '',
    })
    @IsString()
    username: string;

    
  }