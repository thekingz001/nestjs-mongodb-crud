import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsString } from "class-validator";

    function formatDate(date) {
        var datenow = new Date(date),
            month = '' + (datenow.getMonth() + 1),
            day = '' + datenow.getDate(),
            year = datenow.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

export default class updateBooksEntity {
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
        example: formatDate(Date()),
    })
    @IsDateString()
    addate: Date;
}
