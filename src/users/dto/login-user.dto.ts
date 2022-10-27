import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {
//   @ApiProperty()
//   readonly  _id: string;
  @ApiProperty()
  readonly  username: string;
  @ApiProperty()
  readonly  password: string;
//   @ApiProperty()
//   readonly  fristname: string;
//   @ApiProperty()
//   readonly  lastname: string;
//   @ApiProperty()
//   readonly  age: number;
//   @ApiProperty()
//   readonly  type: string;
}
