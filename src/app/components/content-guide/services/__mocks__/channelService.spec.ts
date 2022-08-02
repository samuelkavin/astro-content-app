import axios from 'axios';
import { channelByIdResponseMock, channelResponseMock } from '../../../../mocks';
import ChannelService, { BASE_URL } from '../channelService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('channelService', () => {
	describe('getAll', () => {
		it('should fetch list of channels', async () => {
			mockedAxios.get.mockResolvedValue({
				response: channelResponseMock,
				responseCode: 200,
				responseMessage: 'Channel Listing',
			});

			ChannelService.getAll();

			expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/all.json`);
		});
	});

	describe('getById', () => {
		it('should fetch channel detail by Id', async () => {
			const channelId = 123;
			mockedAxios.get.mockResolvedValue({
				response: channelByIdResponseMock,
				responseCode: 200,
				responseMessage: 'Channel Detail',
			});

			ChannelService.getById(channelId);

			expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/${channelId}.json`);
		});
	});
});
