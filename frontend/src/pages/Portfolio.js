import React, { useState, useEffect } from 'react';
import { Typography, Container, makeStyles, Grid } from '@material-ui/core';
import PortfolioCard from '../components/PortfolioCard';
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
});

const Portfolio = () => {
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
				<Typography className={classes.subtitle} component={'div'} variant="h4">
					<span>Full Image Sets</span>
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
						<PortfolioCard image={image} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Portfolio;
