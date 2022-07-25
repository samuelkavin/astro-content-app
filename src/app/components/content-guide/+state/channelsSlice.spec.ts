import channelsReducer from './channelsSlice';

describe('channels reducer', () => {
	const initialState = {
		entities: {},
		ids: [],
	};
	it('should handle initial state', () => {
		expect(channelsReducer(undefined, { type: 'unknown' })).toEqual({
			entities: {},
			ids: [],
		});
	});
});
