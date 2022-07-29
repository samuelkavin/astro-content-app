import { useEffect } from 'react';
import { selectCategories, getCategories } from '../+state/categoriesSlice';
import { selectAllChannels, getChannels } from '../+state/channelListSlice';
import { selectRange, getRange } from '../+state/rangeSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Category, Channels } from '../types';

function useChannelDispatch() {
	const dispatch = useAppDispatch();
	const categories: Category[] = useAppSelector(selectCategories);
	const channels: Channels[] = useAppSelector(selectAllChannels);
	const range: Range[] = useAppSelector(selectRange);

	useEffect(() => {
		dispatch(getChannels());
		dispatch(getCategories());
		dispatch(getRange());
	}, [dispatch]);

	return { categories, channels, range };
}

export default useChannelDispatch;
