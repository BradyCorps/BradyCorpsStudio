import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	header: {
		marginTop: '1rem',
		textTransform: 'uppercase',
		letterSpacing: '0.5rem',
	},
}));
const Header = () => {
	const classes = useStyles();

	return (
		<Container align="center">
			<Container className={classes.header}>
				<Typography variant="h3" component={'div'}>
					<span>Brady Corps Studio</span>
				</Typography>
			</Container>
		</Container>
	);
};

export default Header;
