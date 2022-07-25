import { memo } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Channels } from '../types/channel.type';
import NoResultFound from './NoResultFound';
import ChannelSchedule from './ChannelSchedule';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        paddingBottom: '0',
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    link: {
        color: '#333',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));

function CardList({ content, addFavorite, removeFavourite, favourites }: any) {
    const classes = useStyles();
    return (
        <>
            {content && content.length ? (
                content.map(({ id, imageUrl, title, stbNumber, currentSchedule }: Channels) => {
                    const isFavorite = favourites.includes(id);
                    return (
                        <Grid key={stbNumber} item xs={6} sm={4} md={4}>
                            <Card style={{ minHeight: '7rem' }}>
                                <CardContent className={classes.content}>
                                    <Box sx={{ display: 'flex', p: '0.5rem', justifyContent: 'flex-end', cursor: 'pointer'}}>
                                        {isFavorite ? (
                                            <span>
                                                <FavoriteIcon onClick={() => removeFavourite(id)} />
                                            </span>
                                        ) : (
                                            <span onClick={() => addFavorite(id)}>
                                                <FavoriteBorderIcon />
                                            </span>
                                        )}
                                    </Box>
                                    <Link to={`channel/${id}`} className={classes.link}>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item xs={4} md={4}>
                                                <img src={imageUrl} alt={title} width="100%" />
                                            </Grid>
                                            <Grid item xs={8} md={8}>
                                                <Typography
                                                    variant="overline"
                                                    sx={{ lineHeight: 0 }}
                                                    component="span">
                                                    CH{stbNumber}
                                                </Typography>
                                                <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                                                    {title}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Link>

                                    <Grid container direction="row" spacing={2}>
                                        <Grid item xs={12} md={12} textAlign='center'>
                                            <ChannelSchedule schedule={currentSchedule} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            ) : (
                <NoResultFound />
            )}
        </>
    );
}

export default memo(CardList);
