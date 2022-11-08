import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateBookDto{
    @ApiPropertyOptional({
        type: String,
        example: '',
    })
    @IsString()
    bookname: string;

    @ApiPropertyOptional({
        type: Number,
    })
    @IsNumber()
    price: number;

    @ApiPropertyOptional({
        type: String,
        example: '',
    })
    @IsString()
    booktype: string;

    @ApiPropertyOptional({
        type: Number,
        default: 10
    })
    @IsNumber()
    amount: number;
    
    @ApiPropertyOptional({
        type: Date,
        example: '',
    })
    @IsString()
    addate: Date;
}
