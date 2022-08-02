import { store } from '../../../../store';
import channelDetailSlice, { getChannelById } from '../channelDetailSlice';

describe('channel detail reducer', () => {
	it('should handle initial state', () => {
		const initialState = undefined;
		const action = { type: '' };
		const result = channelDetailSlice(initialState, action);
		expect(result).toEqual({ isLoading: false, selectedContent: {} });
	});

	it('should be able to fetch the channel detail successfully', async () => {
		const result = await store.dispatch(getChannelById(123));
		expect(result.type).toBe('channel/getChannelById/fulfilled');
	});

	it('should throw error if the channel detail api failed', () => {
		const initialState = undefined;
		const action = { type: 'channel/getChannelById/rejected' };
		const result = channelDetailSlice(initialState, action);
		expect(result).toEqual({ isLoading: false, selectedContent: {} });
	});
});
