import { combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import channelsSlice from './channelsSlice';

const rootReducer = combineReducers({
	categoriesSlice,
	channelsSlice,
});

export default rootReducer;
