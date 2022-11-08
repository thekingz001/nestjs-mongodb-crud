import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class ValidateUserDto {

    @ApiProperty({
        type: String,
        example: '',
    })
    @IsOptional()
    @IsString()
    username: string;

    @ApiProperty({
        type: String,
        example: '',
    })
    @IsOptional()
    @IsString()
    password: string;

}
