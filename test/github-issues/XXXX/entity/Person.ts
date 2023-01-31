import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "../../../../src";
import { Address } from "./Address";
import { Car } from "./Car";

@Entity()
export class Person {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(
        () => Car,
        x => x.person,
    )
    cars: Person[];

    @OneToMany(
        () => Address,
        x => x.person,
    )
    public addresses: Array<Address>;

    @DeleteDateColumn({ type: "timestamp", name: "deleted_at" })
    deletedAt: Date; // <- This causes the bug
}
