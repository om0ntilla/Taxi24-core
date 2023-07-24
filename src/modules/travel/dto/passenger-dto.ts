import {PassengerEntity} from "../entity/passenger.entity";

export class PassengerDto {

    first_name: string;
    last_name: string;
    dni: string;
    email: string;

    public static async toDto(passenger: PassengerEntity): Promise<PassengerDto> {
        return {
            first_name: passenger.first_name,
            last_name: passenger.last_name,
            dni: passenger.dni,
            email: passenger.email,
        }
    }
}