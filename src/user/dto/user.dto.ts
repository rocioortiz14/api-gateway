/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class UserDTO {
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   readonly name: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   readonly username: string;
   @ApiProperty()
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   readonly password: string;
}