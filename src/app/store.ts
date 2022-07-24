import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoriesSlice from './components/content-guide/+state/categoriesSlice';
import channelsSlice from './components/content-guide/+state/channelsSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		channels: channelsSlice,
		categories: categoriesSlice,
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
