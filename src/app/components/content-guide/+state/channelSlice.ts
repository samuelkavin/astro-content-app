import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import ChannelService from '../services/channelService';
import { Channels } from '../types';

export const getChannelById: any = createAsyncThunk('channels/retrieveById', async (id: number) => {
	const response: any = await ChannelService.getById(id);
	return response.response;
});

export interface ChannelState {
	detail: Channels;
	isLoading: boolean;
}

const initialState: ChannelState = {
	detail: {},
	isLoading: false,
};

const channelSlice = createSlice({
	name: 'channel/detail',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getChannelById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getChannelById.fulfilled, (state, action) => {
				state.detail = action.payload;
				state.isLoading = false;
			})
			.addCase(getChannelById.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const selectChannelById = (state: RootState) => state.channel.detail;

export default channelSlice.reducer;
