import {LocationsEntity} from "../entity/locations.entity";
import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LocationDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: '-74.005974'})
    longitude: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: '40.712776'})
    latitude: string;

    public static toDto(location: LocationsEntity): LocationDto {
        return {
            longitude: location.longitude,
            latitude: location.latitude
        }
    }
}