import {Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import {PassengerEntity} from "./passenger.entity";
import {TravelEntity} from "./travel.entity";

@Entity('travel_passenger')
export class TravelPassengerEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @ManyToOne(() => TravelEntity)
    @JoinColumn({name: 'travel_id', referencedColumnName: 'id'})
    travel: Promise<TravelEntity>;

    @ManyToOne(() => PassengerEntity)
    @JoinColumn({name: 'passenger_id', referencedColumnName: 'id'})
    passenger: Promise<PassengerEntity>;

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
