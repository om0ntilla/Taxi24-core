import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {LocationsEntity} from "../entity/locations.entity";


export class LocationRepository {
    constructor(@InjectRepository(LocationsEntity)
                private locationRepo: Repository<LocationsEntity>,
    ) {
    }

    async save(locationsEntity: LocationsEntity): Promise<LocationsEntity> {
        return await this.locationRepo.save(locationsEntity)
    }

}
