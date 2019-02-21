import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, OneToOne, JoinColumn } from "typeorm";
import { Visa } from "./Visa";

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column(
		{
			nullable: true
		}
	)
	profilePicPath: string;

	@Column()
	phoneNumber: string;
	
	@OneToOne(type => Visa)
	@JoinColumn()
	visa: Visa;

}
