import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import RangeService from '../services/rangeService';

export const getRange: any = createAsyncThunk('channels/range', async () => {
	const response: any = await RangeService.getRange();
	return response;
});

const rangeAdapter: any = createEntityAdapter({});

export const { selectAll: selectRange } = rangeAdapter.getSelectors(
	(state: RootState) => state.range,
);

const rangeSlice = createSlice({
	name: 'range',
	initialState: rangeAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getRange.fulfilled]: rangeAdapter.setAll,
	},
});

export default rangeSlice.reducer;