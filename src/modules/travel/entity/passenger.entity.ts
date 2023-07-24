import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {TravelPassengerEntity} from "./travel-passenger.entity";

@Entity('passenger')
export class PassengerEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 60,
    })
    first_name: string;

    @Column({
        type: 'varchar',
        length: 60,
    })
    last_name: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    dni: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    email: string;

    @OneToMany(() => TravelPassengerEntity, travelPassengerEntity => travelPassengerEntity.passenger)
    travels: Promise<TravelPassengerEntity>[];

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
