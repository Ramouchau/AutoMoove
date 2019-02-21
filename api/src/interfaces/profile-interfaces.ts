import { Visa } from "../entity/Visa";

export interface GetProfileRequest {
	token: string
}

export interface GetProfileResponse {
	code: number,
	status: string,
	email?: string,
	username?: string;
	phoneNumber?: string;
	visa?: Visa;
}