import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	header: {
		marginTop: '2rem',
		marginBottom: '1rem',
		textTransform: 'uppercase',
		letterSpacing: '0.5rem',
	},
	title: {
		fontFamily: 'Rock Salt',
		fontSize: 12,
	},
}));
const Header = () => {
	const classes = useStyles();

	return (
		<Container align="center">
			<Container className={classes.header}>
				<Typography className={classes.title} variant="h4" component={'div'}>
					<span>Brady Corps Studio</span>
				</Typography>
			</Container>
		</Container>
	);
};

export default Header;
