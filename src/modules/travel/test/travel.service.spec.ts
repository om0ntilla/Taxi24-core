import {Test, TestingModule} from '@nestjs/testing';

import {HttpStatus} from '@nestjs/common';
import {TravelService} from "../travel.service";
import {DriverRepository} from "../repositories/driver.repository";
import {TravelRepository} from "../repositories/travel.repository";
import {LocationRepository} from "../repositories/location.repository";
import {PassengerRepository} from "../repositories/passenger-repository";
import {DriverDto} from "../dto/driver-dto";
import {DriverEntity} from "../entity/driver.entity";

const DRIVER_NO_FOUND = 'No se encontró ningún conductor con el ID proporcionado.'

describe('TravelService', () => {
    let travelService: TravelService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TravelService,
                DriverRepository,
                TravelRepository,
                LocationRepository,
                PassengerRepository,
            ],
        }).compile();

        travelService = module.get<TravelService>(TravelService);
    });


    describe('getDriverId', () => {
        it('should return a driver by ID', async () => {
            const driverId = 1;
            const response = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const driver: DriverEntity = new DriverEntity();
            driver.id = 1;
            driver.first_name = 'John';
            driver.last_name = 'Doe';
            driver.dni = '123456789';
            driver.email = 'john.doe@example.com';

            // Simular el resultado del repositorio al buscar por ID
            jest.spyOn(travelService['driverRepo'], 'findById').mockResolvedValue(driver);

            await travelService.getDriverId(driverId, response);

            expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
            expect(response.json).toHaveBeenCalledWith({
                data: await DriverDto.toDto(driver, null),
            });
        });

        it('should return NOT_FOUND for non-existing driver ID', async () => {
            const driverId = 99;
            const response = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Simular el resultado del repositorio cuando no se encuentra ningún conductor
            jest.spyOn(travelService['driverRepo'], 'findById').mockResolvedValue(null);

            await travelService.getDriverId(driverId, response);

            expect(response.status).toHaveBeenCalledWith(HttpStatus.NOT_FOUND);
            expect(response.json).toHaveBeenCalledWith({
                error: DRIVER_NO_FOUND,
            });
        });
    });

    // Repite los bloques 'describe' y 'it' para otros métodos
    // del servicio TravelService que desees probar.

});
