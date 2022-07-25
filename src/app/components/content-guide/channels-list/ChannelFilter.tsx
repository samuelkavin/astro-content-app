import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        color: theme.palette.secondary.main,
    },
    show: {
        color: '#62626e!important',
        '&:hover': {
            color: `${theme.palette.secondary.main}!important`,
        },
    },
    toggle: {
        display: 'flex!important',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        margin: '0 auto 3rem',
    },
    buttons: {
        flex: '0 0 33.333333%;%',
        minWidth: '120px',
        marginBottom: '0.8rem!important',
        border: `1px solid ${theme.palette.secondary.main}!important`,
        borderRadius: '35px!important',
    },
    actionsButtons: {
        minWidth: '7rem!important',
    },
}));

export default function ChannelFilter({ content, value, handleFilter, handleReset }: any) {
    const [state, setState] = useState(false);
    const classes = useStyles();

    const list = () => (
        <Box sx={{ width: 350, padding: '1rem', overflow: 'auto' }} role="presentation">
            <Typography
                className={classes.title}
                style={{
                    fontWeight: 600,
                    marginBottom: '1.3rem',
                    fontSize: '16px',
                    marginLeft: '1rem',
                }}
                variant="h5"
                gutterBottom
                component="div">
                Channel Number
            </Typography>
            <ToggleButtonGroup value={value} className={classes.toggle} onChange={handleFilter}>
                {content.map((range: any) => {
                    return (
                        <ToggleButton
                            key={range.value}
                            className={classes.buttons}
                            value={range.value}>
                            <span>
                                {range.min} {range.max}
                            </span>
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box>
                        <Button
                            className={classes.actionsButtons}
                            onClick={() => {setState(false); handleReset()}}
                            variant="outlined">
                            Reset
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            className={classes.actionsButtons}
                            onClick={() => setState(false)}
                            variant="contained">
                            Apply
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <div>
            <IconButton aria-label="filter" className={classes.show} onClick={() => setState(true)}>
                <FilterAltRoundedIcon />
            </IconButton>
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                {list()}
            </Drawer>
        </div>
    );
}
