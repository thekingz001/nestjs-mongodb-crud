import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class banUserEntity {
  @ApiPropertyOptional({
    type: String,
    example: 'false',
  })
  @IsOptional()
  @IsString()  
  active: string;
}