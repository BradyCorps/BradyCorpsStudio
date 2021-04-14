import React from 'react';
import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: '300',
		fontWeightRegular: '400',
		fontWeightMedium: '500',
		fontWeightBold: '700',
		h2: {
			'@media (max-width:600px)': {
				fontSize: '1rem',
			},
		},
		h3: {
			'@media (max-width:600px)': {
				fontSize: '1rem',
			},
		},
		h4: {
			'@media (max-width:600px)': {
				fontSize: '1rem',
			},
		},
		h5: {
			'@media (max-width:600px)': {
				fontSize: '1rem',
			},
		},
		subtitle2: {
			'@media (max-width:600px)': {
				fontSize: '0.6rem',
			},
		},
	},
	palette: {
		secondary: {
			light: '#ffe082',
			main: '#ffca28',
			dark: '#ffa000',
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<main>
				<Header></Header>
				<NavigationTabs></NavigationTabs>
			</main>
		</ThemeProvider>
	);
};

export default App;
