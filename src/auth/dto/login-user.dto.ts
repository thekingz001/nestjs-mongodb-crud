import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class LoginUserDto {
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
}
