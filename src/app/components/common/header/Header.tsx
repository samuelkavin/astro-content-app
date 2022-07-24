import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
	return (
		<AppBar
			className="mb-5"
			position="static"
			style={{
				backgroundImage:
					'linear-gradient(to right bottom, rgb(230, 0, 125), rgb(231, 38, 71))',
			}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{ justifyContent: 'left' }}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
						Astro
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
