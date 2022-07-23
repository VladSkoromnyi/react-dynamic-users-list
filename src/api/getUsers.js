import { BASE_URL } from "./api";

export const getUsers = async () => {
		const response = await fetch(`${BASE_URL}users`);
		const status = response.status;
		
		switch (true) {
			case status >= 200 && response.status < 300:
				return response.json();
				
			case status > 400 && response.status < 500:
				alert('Error 400x');
				break;
				
			case status > 500:
				alert('Error 500x');
				break;
		
			default:
				break;
		}
}
