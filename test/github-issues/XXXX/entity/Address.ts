import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "../../../../src";
import { Person } from "./Person";

@Entity()
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    country: string;

    @Column({name: "userId" })
    userId: string;

    @ManyToOne(
        () => Person,
        x => x.addresses,
        { eager: true }
    )
    @JoinColumn({ name: "userId", referencedColumnName: "id"})
    person: Person;
}