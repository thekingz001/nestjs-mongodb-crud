import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional } from "class-validator";

export class  createOrderEntity {

    @ApiPropertyOptional({
        type: [{
            bookname:{type:String},
            amout:{type:Number},
        }],
        example: [
            {
                bookname: "book1",
                amout: 1
            }, 
            {
                bookname: "book2",
                amout: 1
            }
        ],
    })
    @IsOptional()
    @IsArray()
    books: { bookname: string; amout: number; }[];
    
}
