import channelListSlice, { getChannels } from '../channelListSlice';
import { store } from '../../../../store';

describe('channels reducer', () => {
	it('should handle initial state', () => {
		const initialState = undefined;
		const action = { type: '' };
		const result = channelListSlice(initialState, action);
		expect(result).toEqual({ entities: {}, ids: [] });
	});
	
	it('Should be able to fetch the channel list', async () => {
		const result = await store.dispatch(getChannels());
		expect(result.type).toBe('channel/getAll/fulfilled');
	});
});
