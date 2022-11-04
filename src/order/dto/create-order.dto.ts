import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {

    @ApiPropertyOptional({
        type: [String],
        example: '',
    })
    @IsArray()
    books: string[];

    @ApiPropertyOptional({
        type: Number,
        default: 1
    })
    @IsNumber()
    amount: number;
}
