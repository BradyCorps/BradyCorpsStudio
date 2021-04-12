import React from 'react';
import { Typography, Container, makeStyles, Grid } from '@material-ui/core';
import images from '../schema/schema';
import ImageCard from '../components/ImageCard';

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

const Portfolio = () => {
	const classes = useStyles();

	return (
		<Container>
			<Container align="center">
				<Typography component={'div'} variant="h5">
					<span>Full Image Gallery</span>
				</Typography>
				<Typography className={classes.margin} component={'div'} variant="h4">
					<span>Check out the travel log</span>
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
						<ImageCard image={image} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Portfolio;
