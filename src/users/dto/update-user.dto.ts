import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    // @ApiProperty({
    //     type: Number,
    //     // example: '',
    //   })
    //   @IsNumber()  
    //   coin: number;
}
// export class UpdateUserDto {
//     // @ApiProperty({
//     //   type: String,
//     //   example: '',
//     // })
//     // @IsString()
//     // _id: string;
  
//     @ApiPropertyOptional({
//       type: String,
//       example: '',
//     })
//     @IsOptional()
//     username: string;
  
//     @ApiPropertyOptional({
//       type: String,
//       example: '',
//     })
//     @IsOptional()
//     password: string;
  
//     @ApiProperty({
//       type: String,
//       example: '',
//     })
//     @IsString()
//     fristname: string;
  
//     @ApiProperty({
//       type: String,
//       example: '',
//     })
//     @IsString()
//     lastname: string;
  
//     @ApiProperty({
//       type: Number,
//       // example: '',
//     })
//     @IsNumber()  
//     age: number;
    
//     @ApiProperty({
//       type: Number,
//       // example: '',
//     })
//     @IsNumber()  
//     coin: number;
  
//     @ApiProperty({
//       type: String,
//       example: '',
//     })
//     @IsString()  
//     type: string;
// }
