import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDto {

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
