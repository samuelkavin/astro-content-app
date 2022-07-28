import React, { useCallback, useEffect, useState } from 'react';
import { filter } from 'lodash';
import Formsy from 'formsy-react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import CardList from './CardList';
import TextFieldFormsy from '../../common/text-field/TextField';
import Categories from './Categories';
import ChannelFilter from './ChannelFilter';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Category, Channels, Range } from '../types';
import { getCategories, selectCategories } from '../+state/categoriesSlice';
import { getRange, selectRange } from '../+state/rangeSlice';
import { getChannels, selectAllChannels } from '../+state/channelListSlice';

function ChannelsListPage() {
	const dispatch = useAppDispatch();
	const categories: Category[] = useAppSelector(selectCategories);
	const channels: Channels[] = useAppSelector(selectAllChannels);
	const range: Range[] = useAppSelector(selectRange);

	const [selectedCategory, setSelectedCategory] = useState('all');
	const [filterNumbers, setFilterNumbers]: any = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [sortable, setSortable] = useState(true);

	useEffect(() => {
		dispatch(getChannels());
		dispatch(getCategories());
		dispatch(getRange());
	}, [dispatch]);

	useEffect(() => {
		function filteredByInputCategory(): any {
			if (searchText.length === 0 && selectedCategory === 'all') {
				return channels;
			}

			return filter(channels, (item: any) => {
				if (
					selectedCategory !== 'all' &&
					item.language.toLowerCase() !== selectedCategory
				) {
					return false;
				}
				return (
					item.title.toLowerCase().includes(searchText.toLowerCase()) ||
					item.stbNumber.includes(searchText) ||
					item.language.toLowerCase().includes(selectedCategory)
				);
			});
		}

		if (channels) {
			setFilteredData(filteredByInputCategory());
		}
	}, [channels, searchText, selectedCategory]);

	useEffect(() => {
		function filteredByChannelNum(): any {
			if (filterNumbers.length === 0) {
				return channels;
			}

			return filter(channels, ({ stbNumber }: any) => {
				return filterNumbers.includes(stbNumber[0]);
			});
		}

		if (channels) {
			setFilteredData(filteredByChannelNum());
		}
	}, [channels, filterNumbers]);

	useEffect(() => {
		// @ts-ignore
		const channelFavorites = JSON.parse(localStorage.getItem('favorite-channels'));

		if (channelFavorites) {
			setFavourites(channelFavorites);
		}
	}, []);

	const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setSelectedCategory('all');
		setSearchText(event.target.value);
	};

	const handleSelectedCategory = (event: React.MouseEvent<HTMLDivElement>, category: string) => {
		event.preventDefault();
		setSelectedCategory(category.toLowerCase());
	};

	const handleSort = () => {
		setSortable(!sortable);

		const sortedData = [...filteredData].sort((a: any, b: any) => {
			return sortable ? (a.title > b.title ? 1 : -1) : a.title > b.title ? -1 : 1;
		});
		setFilteredData(sortedData);
	};

	const saveToLocalStorage = (items: any) => {
		localStorage.setItem('favorite-channels', JSON.stringify(items));
	};

	const handleAddFavourite = useCallback(
		(channelId: any) => {
			const newFavouriteList: any = [...favourites, channelId];
			setFavourites(newFavouriteList);
			saveToLocalStorage(newFavouriteList);
		},
		[favourites],
	);

	const handleRemoveFavourite = useCallback(
		(channelId: any) => {
			const newFavouriteList = favourites.filter(id => id !== channelId);

			setFavourites(newFavouriteList);
			saveToLocalStorage(newFavouriteList);
		},
		[favourites],
	);

	const handleFilterNum = useCallback(
		(event: React.MouseEvent<HTMLElement>, channelNumbers: string[]) => {
			setFilterNumbers(channelNumbers);
		},
		[],
	);

	const handleResetFilterNum = () => {
		setFilterNumbers([]);
	}

	return (
		<Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0, marginTop: '16px' }}>
			<Grid
				container
				direction="row"
				spacing={2}
				sx={{
					pr: { xs: '1rem', sm: '2rem', md: '15rem' },
					pl: { xs: '1rem', sm: '2rem', md: '15rem' },
					pb: '3rem',
					background:
						'radial-gradient(circle, rgba(118,77,30,1) 35%, rgba(91,48,17,1) 83%)',
				}}>
				<Grid item xs={12} md={12} textAlign="center" marginBottom="1.5rem">
					<Typography variant="h4" style={{ fontWeight: 600, color: '#fff' }}>
						Content Guide
					</Typography>
				</Grid>

				<Grid item xs={12} md={12} style={{ paddingTop: '0' }}>
					<Formsy>
						<TextFieldFormsy
							type="text"
							name="search"
							onChange={handleSearchText}
							value={searchText}
							placeholder="Search Channels, TV Shows, Movies"
							variant="outlined"
						/>
					</Formsy>
				</Grid>
			</Grid>

			<Grid container direction="row" justifyContent="center" alignItems="center">
				<Grid item sx={{ mb: 5, mt: 5, display: 'inline-flex', overflow: 'auto' }}>
					<Categories
						categories={categories}
						handleSelectedCategory={handleSelectedCategory}
					/>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={2}
				sx={{
					pr: { xs: '1rem', sm: '2rem', md: '5rem' },
					pl: { xs: '1rem', sm: '2rem', md: '5rem' },
				}}>
				<Grid
					item
					xs={12}
					md={12}
					sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box>
						<IconButton onClick={handleSort}>
							<SwapVertRoundedIcon />
						</IconButton>
					</Box>
					<Box>
						<ChannelFilter
							content={range}
							value={filterNumbers}
							handleReset={handleResetFilterNum}
							handleFilter={handleFilterNum}
						/>
					</Box>
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				spacing={2}
				sx={{
					pr: { xs: '1rem', sm: '2rem', md: '5rem' },
					pl: { xs: '1rem', sm: '2rem', md: '5rem' },
				}}>
				<CardList
					content={filteredData}
					favourites={favourites}
					removeFavourite={handleRemoveFavourite}
					addFavorite={handleAddFavourite}
				/>
			</Grid>
		</Container>
	);
}

export default ChannelsListPage;
