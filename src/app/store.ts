import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesSlice from './components/content-guide/+state/categoriesSlice';
import channelSlice from './components/content-guide/+state/channelSlice';
import channelsSlice from './components/content-guide/+state/channelsSlice';
import rangeSlice from './components/content-guide/+state/rangeSlice';

export const store = configureStore({
	reducer: {
		channels: channelsSlice,
		channel: channelSlice,
		categories: categoriesSlice,
		range: rangeSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
