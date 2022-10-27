import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    // @ApiProperty()
    // readonly  _id: string;
    @ApiProperty()
    readonly  username: string;
    @ApiProperty()
    readonly  password: string;
    @ApiProperty()
    readonly  fristname: string;
    @ApiProperty()
    readonly  lastname: string;
    @ApiProperty()
    readonly  age: string;
    @ApiProperty()
    readonly  type: string;    
}
