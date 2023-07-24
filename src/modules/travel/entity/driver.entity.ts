import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {LocationsEntity} from "./locations.entity";

@Entity('driver')
export class DriverEntity {
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

    @OneToOne(() => LocationsEntity)
    @JoinColumn({name: 'location_id', referencedColumnName: 'id'})
    location: Promise<LocationsEntity>;

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
