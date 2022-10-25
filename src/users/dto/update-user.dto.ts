import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {}
// export class UpdateUserDto extends PartialType(CreateUserDto) {
  
//     readonly  name: string;
    
//     readonly  username: string;
    
//     readonly  password: string;
    
//     readonly  fristname: string;
      
//     readonly  lastname: string;
    
//     readonly  age: number;
  
//     readonly  type: string;
// }

// export class UpdateUserDto {
//     readonly  _id: string;
    
//     readonly  name: string;
    
//     readonly  username: string;
    
//     readonly  password: string;
    
//     readonly  fristname: string;
      
//     readonly  lastname: string;
    
//     readonly  age: number;
  
//     readonly  type: string;
//   }
