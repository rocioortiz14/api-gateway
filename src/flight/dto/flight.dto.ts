/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsDate } from "class-validator";

export class FlightDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly pilot: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly airplane: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly destinationCity: string;
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    readonly flightDate;
}