import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class UpdateBooksamountDto {

    @ApiPropertyOptional({
        type: Number,
        default: 10
    })
    @IsNumber()
    amount: number;
    
}
