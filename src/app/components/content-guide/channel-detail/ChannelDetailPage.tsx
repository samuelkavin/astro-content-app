import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Channels } from '../types';
import { getChannelById, selectChannelById } from '../+state/channelSlice';
import ChannelTab from './ChannelTab';

function ChannelDetailPage() {
    const { channelId } = useParams();
    const dispatch = useAppDispatch();
    const { imageUrl, title, stbNumber, description, schedule }: Channels =
        useAppSelector(selectChannelById);

    useEffect(() => {
        dispatch(getChannelById(channelId));
    }, [dispatch, channelId]);

    return (
        <>
            <Box
                sx={{
                    maxWidth: '752px',
                    width: '100%',
                    margin: '3rem auto',
                    position: 'relative',
                }}>
                <Grid container direction="row" spacing={2} sx={{mb: '2.5rem'}}>
                    <Grid item xs={2} md={2}>
                        <img src={imageUrl} alt={title} height="100%" width="100%" />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        md={10}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            paddingTop: 0
                        }}>
                        <Typography
                            variant="overline"
                            sx={{ lineHeight: 0, marginBottom: '0.5rem', fontSize: '0.9rem' }}
                            component="span">
                            CH{stbNumber}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{ mb: 1.5, fontSize: '1rem', marginBottom: 0 }}>
                            {title}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container direction="row" spacing={2} sx={{mb: '3rem'}}>
                    <Grid item xs={12} md={12}>
                        <Typography
                            variant="body1"
                            align='left'
                            sx={{ fontSize: '1rem' }}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container direction="row" spacing={2}>
                    {!isEmpty(schedule) && <ChannelTab schedule={schedule} />}
                </Grid>
            </Box>

            {/* TODO: To be removed once validate the channel detail page */}
            {/* <div className='container'>
                <div className='row align-items-center mb-4'>
                    <div className='col-md-2'>
                        <img src={imageUrl} alt={title} width="100%" />
                    </div>
                    <div className='col-md-10 text-start'>
                        <Typography variant="overline" sx={{ lineHeight: 0 }} component="span">
                            CH{stbNumber}
                        </Typography>
                        <Typography className='mb-0' variant="subtitle2" sx={{ mb: 1.5 }}>
                            {title}
                        </Typography>
                    </div>

                </div>

                <div className='row'>
                    {description}
                </div>

                <div>
                    {
                        !isEmpty(schedule) && <ChannelTab schedule={schedule} />
                    }

                </div>
            </div> */}
        </>
    );
}

export default ChannelDetailPage;