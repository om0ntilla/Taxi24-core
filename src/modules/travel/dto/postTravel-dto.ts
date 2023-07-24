import {LocationDto} from "./location-dto";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class PostTravelDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'NombreViaje'})
    name: string;
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: 2})
    passenger_id: number
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({example: 1})
    driver_id: number;
    @IsNotEmpty()
    @ApiProperty({
        isArray: false,
        example:
            {
                longitude: '-74.005974',
                latitude: '40.712776',
            },
    })
    origin_location: LocationDto;
    @IsNotEmpty()
    @ApiProperty({
        isArray: false,
        example:
            {
                longitude: '-80.843127',
                latitude: '35.227085',
            },
    })
    arrival_origin: LocationDto;

}