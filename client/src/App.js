import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from './styles/Theme';
import Navigation from './components/Navigation';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation />
		</ThemeProvider>
	);
}

export default App;
