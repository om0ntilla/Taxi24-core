import {InjectRepository} from "@nestjs/typeorm";
import {DriverEntity} from "../entity/driver.entity";
import {Repository} from "typeorm";

const STATUS_ACTIVE = 1

export class DriverRepository {
    constructor(@InjectRepository(DriverEntity)
                private driverRepo: Repository<DriverEntity>,
    ) {
    }

    async findById(id: number): Promise<DriverEntity> {
        return await this.driverRepo.findOne({
            relations: ['location'],
            where: {
                id: id,
                active: STATUS_ACTIVE
            }
        })
    }

    async findByActive(): Promise<DriverEntity[]> {
        return await this.driverRepo.find({
            relations: ['location'],
            where: {
                active: STATUS_ACTIVE
            }
        })
    }
}


