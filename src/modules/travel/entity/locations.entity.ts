import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('location')
export class LocationsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", {nullable: true})
    longitude: string;

    @Column("text", {nullable: true})
    latitude: string

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
