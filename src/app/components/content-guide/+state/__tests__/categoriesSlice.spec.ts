import categoriesSlice from '../categoriesSlice';

describe('categories reducer', () => {
	it('should handle initial state', () => {
		const initialState = undefined;
		const action = { type: '' };
		const result = categoriesSlice(initialState, action);
		expect(result).toEqual({ entities: {}, ids: [] });
	});
});
