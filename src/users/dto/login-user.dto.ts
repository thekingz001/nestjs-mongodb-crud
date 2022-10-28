import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class LoginUserDto {
//   @ApiProperty()
//   readonly  _id: string;
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
  readonly  password: string;
//   @ApiProperty()
//   readonly  fristname: string;
//   @ApiProperty()
//   readonly  lastname: string;
//   @ApiProperty()
//   readonly  age: number;
//   @ApiProperty()
//   readonly  type: string;
}
