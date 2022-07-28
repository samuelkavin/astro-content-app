import { combineReducers } from '@reduxjs/toolkit';
import list from './channelListSlice';
import details from './channelDetailSlice';
import categories from './categoriesSlice';
import range from './rangeSlice';

const rootReducer = combineReducers({
	list,
	details,
	categories,
	range,
});

export default rootReducer;
