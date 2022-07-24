import { createTheme, ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = createTheme({
	palette: {
		primary: {
			main: '#f50057',
		},
		secondary: {
			main: 'rgb(230, 0, 125)',
		},
		error: {
			main: '#fb4738',
		},
		info: {
			main: '#ef5927',
		},
		success: {
			main: '#52c157',
		},
	},
});
