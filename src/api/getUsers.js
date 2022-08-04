import { BASE_URL } from "./api";
import { checkStatus } from "./checkStatus" 

export const getUsers = async () => {
	const response = await fetch(`${BASE_URL}users`);
	const status = response.status;
	const checked = checkStatus(status);

	return checked === 'OK' ? response.json() : console.log(checked);
}

export const getUser = async (id) => {
	const response = await fetch(`${BASE_URL}users/${id}`);
	const status = response.status;
	const checked = checkStatus(status);

	return checked === 'OK' ? response.json() : console.log(checked);
}
