import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function NoResultFound() {
    return (
        <Grid container direction="row" justifyContent="center" textAlign='center'>
            <Grid item sx={{ mb: 5, mt: 5 }}>
                <SentimentVeryDissatisfiedIcon style={{ fontSize: '4rem' }} />
                <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                        No Result Found
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#726767' }}>
                        Please try again with another channel name or number
                    </Typography>
                </Box>
            </Grid>
        </Grid>

    )
}

export default NoResultFound