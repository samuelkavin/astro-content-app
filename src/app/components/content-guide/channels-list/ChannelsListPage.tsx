import React, { useEffect, useState } from 'react';
import { filter } from 'lodash';
import Formsy from 'formsy-react';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardList from './CardList';
import TextFieldFormsy from '../../common/text-field/TextField';
import { getChannels, selectChannels } from '../+state/channelsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Category, Channels } from '../types';
import { getCategories, selectCategories } from '../+state/categoriesSlice';
import Categories from './Categories';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function ChannelsListPage() {
    const dispatch = useAppDispatch();
    const channels: Channels[] = useAppSelector(selectChannels);
    const categories: Category[] = useAppSelector(selectCategories);

    const [filteredData, setFilteredData] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        dispatch(getChannels());
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        function getFilteredArray(): any {
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
            setFilteredData(getFilteredArray());
        }
    }, [channels, searchText, selectedCategory]);

    function handleSearchText(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setSelectedCategory('all');
        setSearchText(event.target.value);
    }

    function handleSelectedCategory(event: React.MouseEvent<HTMLDivElement>, category: string) {
        event.preventDefault();
        setSelectedCategory(category.toLowerCase());
    }

    return (
        <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0, marginTop: '16px' }}>
            <Grid
                container
                direction="row"
                spacing={2}
                sx={{
                    pr: '10rem',
                    pl: '10rem',
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
                            variant="outlined"/>
                    </Formsy>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ pr: '10rem', pl: '10rem' }}
            >
                <Grid item sx={{ mb: 5, mt: 5, display: 'inline-flex', overflow: 'auto' }}>
                    <Categories
                        categories={categories}
                        handleSelectedCategory={handleSelectedCategory}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ pr: '10rem', pl: '10rem' }}>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box>
                        <IconButton aria-label="delete">
                            <SwapVertRoundedIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton aria-label="delete">
                            <FilterAltRoundedIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            <Grid container direction="row" spacing={2} sx={{ pr: '10rem', pl: '10rem' }}>
                <CardList content={filteredData} />
            </Grid>
        </Container>
    );
}

export default ChannelsListPage;
