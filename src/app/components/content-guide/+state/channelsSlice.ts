import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import ChannelService from '../services/channelService';

export const getChannels: any = createAsyncThunk('channels/retrieve', async () => {
	const { response }: any = await ChannelService.getAll();
	return response;
});

const channelsAdapter: any = createEntityAdapter({});

export const { selectAll: selectChannels } = channelsAdapter.getSelectors(
	(state: RootState) => state.channels,
);

const channelsSlice = createSlice({
	name: 'channels/list',
	initialState: channelsAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getChannels.fulfilled]: channelsAdapter.setAll,
	},
});

export default channelsSlice.reducer;
