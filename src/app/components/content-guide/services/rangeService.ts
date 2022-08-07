import axios, { AxiosResponse } from 'axios';

function getRange(): any {
	const baseUrl = `http://localhost:3001/range`;

	return new Promise((resolve, reject) => {
		axios.get(baseUrl).then((response: AxiosResponse) => {
			if (response.status === 200) {
				resolve(response.data);
			} else {
				reject(new Error('Something went wrong!'));
			}
		});
	});
}

const RangeService = {
	getRange,
};

export default RangeService;
