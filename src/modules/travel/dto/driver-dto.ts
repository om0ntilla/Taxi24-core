import {DriverEntity} from "../entity/driver.entity";
import {LocationDto} from "./location-dto";

const LOCATION_NOT_ACTIVE = 'LOCATION_NOT_ACTIVE'

export class DriverDto {

    driver_id: number;
    first_name: string;
    last_name: string;
    dni: string;
    email: string;
    location: LocationDto | string;
    km: number;

    public static async toDto(driver: DriverEntity, km: number): Promise<DriverDto> {
        let local = await Promise.resolve(driver.location);
        return {
            driver_id: driver.id,
            first_name: driver.first_name,
            last_name: driver.last_name,
            dni: driver.dni,
            email: driver.email,
            location: local != null ? LocationDto.toDto(local) : LOCATION_NOT_ACTIVE,
            km: km != null ? km : null
        }
    }
}