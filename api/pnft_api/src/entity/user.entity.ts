import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    password: string;
}