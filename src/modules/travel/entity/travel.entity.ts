import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm';
import {DriverEntity} from "./driver.entity";
import {TravelPassengerEntity} from "./travel-passenger.entity";
import {LocationsEntity} from "./locations.entity";

@Entity('travel')
export class TravelEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 60,
    })
    name: string;

    @OneToOne(() => DriverEntity)
    @JoinColumn({name: 'driver_id', referencedColumnName: 'id'})
    driver: Promise<DriverEntity>;

    @OneToMany(() => TravelPassengerEntity, travelPassengerEntity => travelPassengerEntity.travel)
    passengers: TravelPassengerEntity[];

    @OneToOne(() => LocationsEntity)
    @JoinColumn({name: 'origin_location_id', referencedColumnName: 'id'})
    originLocation: Promise<LocationsEntity>;

    @OneToOne(() => LocationsEntity)
    @JoinColumn({name: 'arrival_location_id', referencedColumnName: 'id'})
    arrivalLocation: Promise<LocationsEntity>;

    @Column({
        type: 'int',
        width: 1,
        comment: 'Active register boolean atribute',
        default: 1,
    })
    active: number;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    updated_at: Date;
}
