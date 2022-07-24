import axios, { AxiosResponse } from 'axios';

function getAll() {
	const baseUrl = `https://contenthub-api.eco.astro.com.my/channel/all.json`;

	return new Promise((resolve, reject): any => {
		axios.get(baseUrl).then((response: AxiosResponse) => {
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
};

export default ChannelService;
