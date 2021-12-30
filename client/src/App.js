import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from './styles/Theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
