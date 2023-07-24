import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PassengerEntity} from "../entity/passenger.entity";

const STATUS_ACTIVE = 1

export class PassengerRepository {
    constructor(@InjectRepository(PassengerEntity)
                private passengerRepo: Repository<PassengerEntity>,
    ) {
    }

    async findById(id: number): Promise<PassengerEntity> {
        return await this.passengerRepo.findOne({
            relations: ['travels'],
            where: {
                id: id,
                active: STATUS_ACTIVE
            }

        })
    }

    async findByActive(): Promise<PassengerEntity[]> {
        return await this.passengerRepo.find({
            relations: ['travels'],
            where: {
                active: STATUS_ACTIVE
            }
        })
    }
}