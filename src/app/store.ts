import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './components/content-guide/+state';

export const store = configureStore({
	reducer: {
		content: rootReducer,
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
