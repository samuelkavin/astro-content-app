import axios from 'axios';
import { rangeMock } from '../../../../mocks';
import RangeService from '../rangeService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RangeService', () => {
	describe('getRange', () => {
		it('should fetch list of channel ranges', () => {
			const baseUrl = `http://localhost:3001/range`;

			mockedAxios.get.mockResolvedValue({
				response: rangeMock,
			});

			RangeService.getRange();

			expect(mockedAxios.get).toHaveBeenCalledWith(baseUrl);
		});

		it.todo('should throw error if channel range api failed');
	});
});
