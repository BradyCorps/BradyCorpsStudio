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
