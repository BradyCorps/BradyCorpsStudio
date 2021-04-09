import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Portfolio = () => {
	return (
		<Container align="center">
			<Typography component={'div'} variant="h5">
				<span>Image Portfolio</span>
			</Typography>
			<Typography component={'div'} variant="h7">
				<span>Full image suite</span>
			</Typography>
		</Container>
	);
};

export default Portfolio;
