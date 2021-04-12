import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Store = () => {
	return (
		<Container align="center">
			<Typography component={'div'} variant="h5">
				<span>Store</span>
			</Typography>
			<Typography component={'div'} variant="subtitle1">
				<span>Available Prints for sale</span>
			</Typography>
		</Container>
	);
};

export default Store;
