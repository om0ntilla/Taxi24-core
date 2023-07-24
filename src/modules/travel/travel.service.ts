import {HttpStatus, Injectable} from '@nestjs/common';

import {DriverRepository} from "./repositories/driver.repository";
import {DriverDto} from "./dto/driver-dto";
import {LocationDto} from "./dto/location-dto";
import {PostTravelDto} from "./dto/postTravel-dto";
import {TravelEntity} from "./entity/travel.entity";
import {TravelRepository} from "./repositories/travel.repository";
import {LocationsEntity} from "./entity/locations.entity";
import {LocationRepository} from "./repositories/location.repository";
import {TravelDto} from "./dto/travel-dto";
import {PassengerRepository} from "./repositories/passenger-repository";
import {PassengerDto} from "./dto/passenger-dto";
import {getDistance} from "geolib";
import {TravelPassengerRepository} from "./repositories/travel-passenger.repository";
import {TravelPassengerEntity} from "./entity/travel-passenger.entity";

const DRIVER_NO_FOUND = 'No se encontró ningún conductor con el ID proporcionado.'
const DRIVERS_NO_FOUND = 'No se encontró ningún conductor registrado en la base de datos'
const PASSENGER_NO_FOUND = 'No se encontró ningún pasajero con el ID proporcionado'
const PASSENGERS_NO_FOUND = 'No se encontró ningún pasajero registrado en la base de datos'
const TRAVEL_NO_FOUND = 'No se encontró ningún viaje registro en la base de datos'

@Injectable()
export class TravelService {
    constructor(private driverRepo: DriverRepository,
                private travelRepo: TravelRepository,
                private locationRepo: LocationRepository,
                private passengerRepo: PassengerRepository,
                private travelPassengerRepo: TravelPassengerRepository) {
    }


    async getDriverId(id: number, response) {
        try {
            let result = await this.driverRepo.findById(id)
            if (!result) {
                throw new Error(DRIVER_NO_FOUND);
            }

            return response.status(HttpStatus.OK).json({
                data: await DriverDto.toDto(result, null)
            });

        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                error: error.message,
            });
        }
    }

    async getDrivers(response) {
        try {
            let result = await this.driverRepo.findByActive()

            if (!result) {
                throw new Error(DRIVERS_NO_FOUND);
            }
            return response.status(HttpStatus.OK).json({
                data: await Promise.all(result.map(driver => DriverDto.toDto(driver, null)))
            });

        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                error: error.message,
            });
        }
    }

    async getShortDistance(locationDto: LocationDto, response) {

        let drivers = await this.driverRepo.findByActive();

        let resp = [];
        for (const driver of drivers) {
            const location = await driver.location;

            let km = await this.calculateDistance(locationDto.latitude, locationDto.longitude, location.latitude, location.longitude);
            resp.push(await DriverDto.toDto(driver, km));
        }

        return response.status(HttpStatus.OK).json({
            data: resp
        });
    }

    async calculateDistance(lat1: string, lon1: string, lat2: string, lon2: string): Promise<number> {
        const distance = getDistance(
            {latitude: lat1, longitude: lon1},
            {latitude: lat2, longitude: lon2}
        );

        // `distance` es la distancia en metros, así que lo convertimos a kilómetros
        const distanceInKm = distance / 1000;

        return distanceInKm;
    }


    async postTravel(postTravelDto: PostTravelDto, response) {

        try {
            let travelSave = new TravelEntity();
            let originLocationSave = new LocationsEntity();
            let originArrivalSave = new LocationsEntity();
            let travelPassengerEntity = new TravelPassengerEntity();

            let driverDB = await this.driverRepo.findById(postTravelDto.driver_id)
            if (!driverDB) {
                throw new Error(DRIVER_NO_FOUND);
            }

            let passengerDB = await this.passengerRepo.findById(postTravelDto.passenger_id);
            if (!passengerDB) {
                throw new Error(PASSENGER_NO_FOUND);
            }

            travelSave.name = postTravelDto.name

            originLocationSave.longitude = postTravelDto.origin_location.longitude;
            originLocationSave.latitude = postTravelDto.origin_location.latitude;

            originArrivalSave.longitude = postTravelDto.arrival_origin.latitude;
            originArrivalSave.latitude = postTravelDto.arrival_origin.latitude;

            const [originLocationDB, originArrivalDB] = await Promise.all([
                this.locationRepo.save(originLocationSave),
                this.locationRepo.save(originArrivalSave),
            ]);

            travelSave.originLocation = Promise.resolve(originLocationDB);
            travelSave.arrivalLocation = Promise.resolve(originArrivalDB);


            travelSave.driver = Promise.resolve(driverDB)
            let travelDB = await this.travelRepo.save(travelSave);

            travelPassengerEntity.travel = Promise.resolve(travelDB);
            travelPassengerEntity.passenger = Promise.resolve(passengerDB);

            await this.travelPassengerRepo.save(travelPassengerEntity);

            return response.status(HttpStatus.CREATED).json({
                data: await TravelDto.toDto(travelDB)
            });

        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                error: error.message,
            });
        }
    }

    async getTravel(response) {

        try {
            let result = await this.travelRepo.findByActive()

            if (!result) {
                throw new Error(TRAVEL_NO_FOUND);
            }
            return response.status(HttpStatus.OK).json({
                data: await Promise.all(result.map(travel => TravelDto.toDto(travel)))
            });

        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                error: error.message,
            });
        }
    }

    async getPessengerId(id: number, response) {
        try {
            let result = await this.passengerRepo.findById(id)
            if (!result) {
                throw new Error(PASSENGER_NO_FOUND);
            }

            return response.status(HttpStatus.OK).json({
                data: await PassengerDto.toDto(result)
            });

        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                error: error.message,
            });
        }
    }

    async getPessenger(response) {
        try {
            let result = await this.passengerRepo.findByActive()

            if (!result) {
                throw new Error(PASSENGERS_NO_FOUND);
            }
            return response.status(HttpStatus.OK).json({
                data: await Promise.all(result.map(passenger => PassengerDto.toDto(passenger)))
            });

        } catch (error) {
            return response.status(HttpStatus.NOT_FOUND).json({
                error: error.message,
            });
        }
    }
}