import { USERS_URL } from "./api";

const checkStatus = (status) => {
	switch (true) {
		case status >= 200 && status < 300:
			return 'OK';
			
		case status > 400 && status < 500:
			return 'Error 400x';
			
		case status > 500:
			return 'Error 500x';
	
		default:
			break;
	}
}

export const getUsers = async () => {
	const response = await fetch(`${USERS_URL}users`);
	const status = response.status;
	const checked = checkStatus(status);

	return checked === 'OK' ? response.json() : console.log(checked);
}

export const getUser = async (id) => {
	const response = await fetch(`${USERS_URL}users/${id}`);
	const status = response.status;
	const checked = checkStatus(status);

	return checked === 'OK' ? response.json() : console.log(checked);
}
