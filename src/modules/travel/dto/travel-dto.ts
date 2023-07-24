import {LocationDto} from "./location-dto";
import {TravelEntity} from "../entity/travel.entity";
import {DriverDto} from "./driver-dto";

export class TravelDto {

    name: string;
    driver: Promise<DriverDto>;
    origin_location: LocationDto;
    arrival_origin: LocationDto;


    public static async toDto(travel: TravelEntity): Promise<TravelDto> {
        let driver = await Promise.resolve(travel.driver);
        let origin = await Promise.resolve(travel.originLocation);
        let arrival = await Promise.resolve(travel.arrivalLocation);
        return {
            name: travel.name,
            driver: DriverDto.toDto(driver, null),
            origin_location: LocationDto.toDto(origin),
            arrival_origin: LocationDto.toDto(arrival)
        }
    }

}