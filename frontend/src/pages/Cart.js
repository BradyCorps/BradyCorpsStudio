import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Cart = () => {
	return (
		<Container align="center">
			<Typography component={'div'} variant="h5">
				<span>Cart</span>
			</Typography>
			<Typography component={'div'} variant="h7">
				<span>Your Shopping Cart</span>
			</Typography>
		</Container>
	);
};

export default Cart;
