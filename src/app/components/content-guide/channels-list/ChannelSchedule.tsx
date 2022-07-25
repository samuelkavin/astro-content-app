import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { formatTime } from '../../../helper';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        color: theme.palette.secondary.main,
    },
    show: {
        color: '#62626e!important',
        '&:hover': {
            color: `${theme.palette.secondary.main}!important`,
        },
    }
}));

export default function ChannelSchedule({ schedule }: any) {
    const [state, setState] = useState(false);
    const classes = useStyles();

    const list = () => (
        <Box
            sx={{ width: 350, padding: '1rem', overflow: 'auto' }}
            role="presentation"
            onClick={() => setState(false)}
            onKeyDown={() => setState(false)}>
            <Typography
                className={classes.title}
                style={{ fontWeight: 600, marginBottom: '1.3rem' }}
                variant="h5"
                gutterBottom
                component="div">
                Showtime
            </Typography>
            <Grid container spacing={2}>
                {schedule.map(({ eventId, datetime, title }: any) => {
                    return (
                        <React.Fragment key={eventId}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" display="block" gutterBottom>
                                    {formatTime(datetime)}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="subtitle2" display="block" gutterBottom>
                                    {title}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    );
                })}
            </Grid>
        </Box>
    );

    return (
        <div>
            <Button className={classes.show} onClick={() => setState(true)}>
                <KeyboardDoubleArrowDownIcon />
            </Button>
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                {list()}
            </Drawer>
        </div>
    );
}
