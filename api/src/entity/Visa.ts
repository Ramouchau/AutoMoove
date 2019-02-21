import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Store } from "express-session";

@Entity()
export class Visa {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cardNumber: string;

	@Column()
	month: string;

	@Column()
	year: string;

	@Column()
	code: string;

}
