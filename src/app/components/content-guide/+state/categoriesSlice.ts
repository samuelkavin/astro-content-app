import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import CategoriesService from '../services/categoriesService';
import { Category } from '../types';

export const getCategories: any = createAsyncThunk('channels/categories', async () => {
	const response: Category[] = await CategoriesService.getCategories();
	return response;
});

const categoriesAdapter: any = createEntityAdapter({});

export const { selectAll: selectCategories } = categoriesAdapter.getSelectors(
	(state: RootState) => state.content.categories,
);

const categoriesSlice = createSlice({
	name: 'channel/categories',
	initialState: categoriesAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getCategories.fulfilled]: categoriesAdapter.setAll,
	},
});

export default categoriesSlice.reducer;
