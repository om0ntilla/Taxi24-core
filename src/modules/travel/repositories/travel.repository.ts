import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TravelEntity} from "../entity/travel.entity";

const STATUS_ACTIVE = 1

export class TravelRepository {
    constructor(@InjectRepository(TravelEntity)
                private travelRepo: Repository<TravelEntity>,
    ) {
    }

    async save(travelEntity: TravelEntity): Promise<TravelEntity> {
        return await this.travelRepo.save(travelEntity)
    }

    async findByActive(): Promise<TravelEntity[]> {
        return await this.travelRepo.find({
            relations: ['driver'],
            where: {
                active: STATUS_ACTIVE
            }
        })
    }

}