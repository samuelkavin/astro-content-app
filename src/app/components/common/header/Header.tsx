import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme: Theme) => ({
	header: {
		backgroundImage: 'linear-gradient(to right bottom, rgb(230, 0, 125), rgb(231, 38, 71))',
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar
			position="static"
			className={classes.header}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, fontWeight: 600, display: { xs: 'flex', md: 'flex' } }}>
						Astro
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
