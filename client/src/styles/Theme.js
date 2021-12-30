import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

let theme = createTheme({
	palette: {
		background: {
			default: '#242424',
		},
		primary: {
			main: '#000000'
		}
	},
	typography: {
		fontFamily: 'neue-haas-grotesk-display, sans-serif',
		h1: {
			fontWeight: 200,
			color: '#ffffff',
		},
		h2: {
			fontWeight: 500,
			fontSize: '2rem', /* TODO: make this responsive */
			color: '#ffffff',
		},
		body1: {
			fontWeight: 500,
			color: '#ffffff',
		},
		current: {
			fontFamily: 'neue-haas-grotesk-display, sans-serif',
			display: 'block',
			fontWeight: 600,
			color: grey[500],
			fontSize: '2rem', /* TODO: make this responsive */
		},
		past: {
			fontFamily: 'neue-haas-grotesk-display, sans-serif',
			display: 'block',
			fontWeight: 600,
			color: grey[500],
			fontSize: '1.5rem', /* TODO: make this responsive */
		},
		characters: {
			fontFamily: 'source-han-serif-japanese, serif',
			display: 'block',
			fontWeight: 900,
			fontSize: '5rem', /* TODO: make this reponsive */
		},
		navHead: {
			fontFamily: 'neue-haas-grotesk-display, sans-serif',
			display: 'block',
			fontWeight: 700,
			color: '#ffffff', 
		}, 
		nav: {
			fontFamily: 'neue-haas-grotesk-display, sans-serif',
			display: 'block',
			fontWeight: 500,
			fontSize: '0.75rem',
		}, 
		footer: {
			fontFamily: 'neue-haas-grotesk-display, sans-serif',
			display: 'block', 
			fontWeight: 700,
		}
	},
});

theme = responsiveFontSizes(theme);

export default theme;
