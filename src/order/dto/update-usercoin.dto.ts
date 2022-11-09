import { IsNumber } from "class-validator";

export class UpdateUsercoinDto{

    @IsNumber()  
    coin: number;
      
}