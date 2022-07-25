import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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
}));

export default function ChannelFilter({ content, value, handleFilter }: any) {
    const [state, setState] = useState(false);
    const classes = useStyles();

    const list = () => (
        <Box sx={{ width: 350, padding: '1rem', overflow: 'auto' }} role="presentation">
            <Typography
                className={classes.title}
                style={{ fontWeight: 600, marginBottom: '1.3rem' }}
                variant="h5"
                gutterBottom
                component="div">
                Channel Number
            </Typography>
            <ToggleButtonGroup value={value} onChange={handleFilter} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {content.map((range: any) => {
                    return (
                        <ToggleButton key={range.value} value={range.value} style={{ width: '100%' }}>
                            <span>{range.min} {range.max}</span>
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
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
