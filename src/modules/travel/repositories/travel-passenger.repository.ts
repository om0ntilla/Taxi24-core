import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TravelPassengerEntity} from "../entity/travel-passenger.entity";

export class TravelPassengerRepository {
    constructor(@InjectRepository(TravelPassengerEntity)
                private travelPassengerEntityRepo: Repository<TravelPassengerEntity>,
    ) {
    }

    async save(travelPassengerEntity: TravelPassengerEntity): Promise<TravelPassengerEntity> {
        return await this.travelPassengerEntityRepo.save(travelPassengerEntity)
    }
}