import axios, { AxiosResponse } from 'axios';

function getCategories(): any {
	const baseUrl = `http://localhost:3001/categories`;

	return new Promise((resolve, reject) => {
		axios.get(baseUrl).then((response: AxiosResponse) => {
			console.log('response123', response)
			if (response.status === 200) {
				resolve(response.data);
			} else {
				reject('Something went wrong!');
			}
		});
	});
}

const CategoriesService = {
	getCategories,
};

export default CategoriesService;
