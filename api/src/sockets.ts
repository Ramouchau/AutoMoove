import * as socketIo from 'socket.io';
import * as jwt from 'jsonwebtoken';


import { UserToken } from './interfaces/auth-interfaces';
import { User } from './entity/User';
import { userRegister, userLogin, getUser } from './controller/auth-controller'
import { getProfile } from './controller/profile-controller'
import { Connection, getConnection } from 'typeorm';

export const socketInit = (socket: socketIo.Socket) => {

	socket.on('register', (data) => userRegister(data, socket));
	socket.on('login', (data) => userLogin(data, socket));
	socket.on('get-user', (data) => requireAuth(data, socket, 'get-user', getUser));
	socket.on('get-profile', (data) => getProfile(data, socket));
}

const requireAuth = <T>(data: any, socket: socketIo.Socket, resRoute: string, func: Function) => {
	const connection: Connection = getConnection();
	let response = { code: 200, status: "ok" };

	if (!data) {
		response.code = 400
		response.status = "ko"
		socket.emit(resRoute, response)
		return
	}

	jwt.verify(data.token, '©oÜΓŠ', async (err, res: UserToken) => {
		if (err) {
			response.code = 401
			response.status = "unauthorized"
			socket.emit(resRoute, response)
			return
		}

		const user = await connection.getRepository(User).findOne(res.id, { relations: ["visa"] });
		if (!user) {
			response.code = 404
			response.status = "ko"
			socket.emit(resRoute, response)
			return
		}

		func(user, data, socket)
	})
}
