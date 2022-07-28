import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import ChannelService from '../services/channelService';
import { Channels } from '../types';

export const getChannelById: any = createAsyncThunk(
	'channel/getChannelById',
	async (id: number) => {
		const response: any = await ChannelService.getById(id);
		return response.response;
	},
);

export interface ChannelState {
	selectedContent: Channels;
	isLoading: boolean;
}

const initialState: ChannelState = {
	selectedContent: {},
	isLoading: false,
};

const channelDetailSlice = createSlice({
	name: 'channel/details',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getChannelById.pending, state => {
				state.isLoading = true;
			})
			.addCase(getChannelById.fulfilled, (state, action) => {
				state.selectedContent = action.payload;
				state.isLoading = false;
			})
			.addCase(getChannelById.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const selectChannelById = createSelector(
	(state: RootState) => state.content,
	content => content.details.selectedContent,
);

export default channelDetailSlice.reducer;
