import React from 'react';
import { Typography, Container, makeStyles, Grid } from '@material-ui/core';
import images from '../schema/schema';
import ShoppingCard from '../components/ShoppingCard';

const useStyles = makeStyles({
	margin: {
		marginTop: '1rem',
		letterSpacing: '0.2rem',
		textTransform: 'uppercase',
	},
	root: {
		marginTop: '2rem',
	},
});

const Store = () => {
	const classes = useStyles();

	return (
		<Container>
			<Container align="center">
				<Typography component={'div'} variant="h5">
					<span>Store</span>
				</Typography>
				<Typography className={classes.margin} component={'div'} variant="h4">
					<span>Prints Available for Sale</span>
				</Typography>
			</Container>
			<Grid
				container
				className={classes.root}
				spacing={3}
				direction="row"
				justify="center"
				alignItems="center"
			>
				{images.map(image => (
					<Grid item xs={6}>
						<ShoppingCard image={image} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Store;
