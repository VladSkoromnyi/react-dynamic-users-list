export const checkStatus = (status) => {
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
