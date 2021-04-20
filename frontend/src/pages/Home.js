import React, { useState, useEffect } from 'react';
import { Typography, Container, makeStyles, Grid } from '@material-ui/core';

import ImageCard from '../components/ImageCard';
import axios from 'axios';

const useStyles = makeStyles({
	root: {
		marginTop: '3rem',
	},
	subtitle: {
		marginTop: '1rem',
		letterSpacing: '0.2rem',
		textTransform: 'uppercase',
	},
	mt: {
		marginTop: '2rem',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Home = () => {
	const classes = useStyles();
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const { data } = await axios.get('/api/images');

			setImages(data);
		};

		fetchImages();
	}, []);

	return (
		<div className={classes.root}>
			<Container align="center">
				<Typography component={'div'} variant="h5">
					<span>Welcome</span>
				</Typography>
				<Typography className={classes.subtitle} component={'div'} variant="h4">
					<span>Latest Image Sets</span>
				</Typography>
			</Container>

			<Grid
				container
				className={classes.mt}
				spacing={2}
				direction="row"
				justify="center"
				alignItems="center"
			>
				{images.map(image => (
					<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
						<ImageCard image={image} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;
