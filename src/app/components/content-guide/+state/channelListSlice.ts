import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import ChannelService from '../services/channelService';

export const getChannels: any = createAsyncThunk('channel/getAll', async () => {
	const { response }: any = await ChannelService.getAll();
	return response;
});

const channelListAdapter: any = createEntityAdapter();

export const { selectAll: selectAllChannels } = channelListAdapter.getSelectors(
	(state: RootState) => state.content.list,
);

const channelListSlice = createSlice({
	name: 'channel/list',
	initialState: channelListAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getChannels.fulfilled]: channelListAdapter.setAll,
	},
});

export default channelListSlice.reducer;
