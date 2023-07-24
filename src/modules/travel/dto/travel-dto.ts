import {LocationDto} from "./location-dto";
import {TravelEntity} from "../entity/travel.entity";
import {DriverDto} from "./driver-dto";

export class TravelDto {

    name: string;
    driver: Promise<DriverDto>;
    origin_location: LocationDto;
    arrival_origin: LocationDto;


    public static async toDto(travel: TravelEntity): Promise<TravelDto> {

        const [driver, origin, arrival] = await Promise.all([
            Promise.resolve(travel.driver),
            Promise.resolve(travel.originLocation),
            Promise.resolve(travel.arrivalLocation)
        ]);
        return {
            name: travel.name,
            driver: DriverDto.toDto(driver, null),
            origin_location: LocationDto.toDto(origin),
            arrival_origin: LocationDto.toDto(arrival)
        }
    }

}