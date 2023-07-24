import {Module} from '@nestjs/common';
import {TravelController} from './travel.controller';
import {TravelService} from './travel.service';
import {config} from 'dotenv';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DriverEntity} from "./entity/driver.entity";
import {PassengerEntity} from "./entity/passenger.entity";
import {TravelEntity} from "./entity/travel.entity";
import {TravelPassengerEntity} from "./entity/travel-passenger.entity";
import {LocationsEntity} from "./entity/locations.entity";
import {DriverRepository} from "./repositories/driver.repository";
import {TravelRepository} from "./repositories/travel.repository";
import {LocationRepository} from "./repositories/location.repository";
import {PassengerRepository} from "./repositories/passenger-repository";
import {TravelPassengerRepository} from "./repositories/travel-passenger.repository";

config();

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DriverEntity,
            TravelEntity,
            TravelPassengerEntity,
            PassengerEntity,
            LocationsEntity,
        ]),
    ],
    controllers: [TravelController],
    providers: [TravelService,
        DriverRepository,
        TravelRepository,
        LocationRepository,
        PassengerRepository,
        TravelPassengerRepository]
})
export class TravelModule {
}
