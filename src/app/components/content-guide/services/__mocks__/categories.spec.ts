import axios from 'axios';
import { categoriesMock } from '../../../../mocks';
import CategoriesService from '../categoriesService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('categoriesService', () => {
	describe('getCategories', () => {
		it('should fetch list of categories', () => {
			const baseUrl = `http://localhost:3001/categories`;

			mockedAxios.get.mockResolvedValue({
				response: categoriesMock,
			});

			CategoriesService.getCategories();

			expect(mockedAxios.get).toHaveBeenCalledWith(baseUrl);
		});

		it.todo('should throw error if categories api failed');
	});
});
