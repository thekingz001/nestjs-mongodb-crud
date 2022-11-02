import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @ApiPropertyOptional({
        type: String,
        example: '',
    })
    @IsString()
    book_name: string;

    @ApiPropertyOptional({
        type: Number,
        // example: '',
    })
    @IsNumber()
    price: number;

    @ApiPropertyOptional({
        type: String,
        example: '',
    })
    @IsString()
    book_type: string;

    @ApiPropertyOptional({
        type: Number,
        // example: '',
        default: 10
    })
    @IsNumber()
    amount: number;
}
