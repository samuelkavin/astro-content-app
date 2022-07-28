import axios, { AxiosResponse } from 'axios';

export const BASE_URL: string = `https://contenthub-api.eco.astro.com.my/channel`;

function getAll() {
	const path = `${BASE_URL}/all.json`;

	return new Promise((resolve, reject): any => {
		axios.get(path).then((response: AxiosResponse) => {
			if (response.status === 200) {
				resolve(response.data);
			} else {
				reject(`Something went wrong!`);
			}
		});
	});
}

function getById(id: number): any {
	const path = `${BASE_URL}/${id}.json`;

	return new Promise((resolve, reject) => {
		axios.get(path).then((response: AxiosResponse) => {
			if (response.status === 200) {
				resolve(response.data);
			} else {
				reject(`Something went wrong!`);
			}
		});
	});
}

const ChannelService = {
	getAll,
	getById,
};

export default ChannelService;
