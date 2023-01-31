import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "../../../../src";
import { Person } from "./Person";

@Entity()
export class Car {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    type: string;

  @ManyToOne(
    () => Person,
    x => x.cars,
    { onUpdate: "CASCADE", onDelete: "CASCADE" },
  )
  person: Person;
}
