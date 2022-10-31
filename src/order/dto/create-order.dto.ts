import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {

    // readonly   _id: string;

    @ApiPropertyOptional({
        type: String,
        example: '',
    })
    @IsString()
    book_name: string;

    // @ApiPropertyOptional({
    //     type: String,
    //     example: '',
    // })
    // @IsNumber()
    // price: number;

    // @ApiPropertyOptional({
    //     type: String,
    //     example: '',
    // })
    // @IsString()
    // book_type: string;

    @ApiPropertyOptional({
        type: Number,
        default: 1
    })
    @IsNumber()
    amount: number;
}
