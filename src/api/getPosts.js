import { BASE_URL } from "./api";
import { checkStatus } from "./checkStatus" 

export const getPosts = async () => {
	const response = await fetch(`${BASE_URL}posts`);
	const status = response.status;
	const checked = checkStatus(status);

	return checked === 'OK' ? response.json() : console.log(checked);
}
