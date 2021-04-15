import React from 'react';
import {
	Typography,
	Grid,
	Paper,
	Button,
	ButtonBase,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 600,
	},
	image: {
		width: 200,
		height: 200,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '100%',
		},
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	typography: {
		textTransform: 'uppercase',
		letterSpacing: '0.2rem',
		fontWeight: '700',
	},
	addTo: {
		textTransform: 'uppercase',
		letterSpacing: '0.1rem',
		fontWeight: '500',
	},
}));

const ImageCard = ({ image }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt={image.name} src={image.image} />
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography className={classes.typography} variant="subtitle1">
									{image.name}
								</Typography>
								<Typography gutterBottom variant="body2">
									{image.location}, {image.province}
								</Typography>
								<Typography
									variant="subtitle2"
									gutterBottom
									color="textSecondary"
									className={classes.typography}
								>
									{image.description}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="subtitle2" color="textSecondary">
									Resolution: 1920x1080
								</Typography>
							</Grid>
							<Grid item>
								<Button
									className={classes.addTo}
									variant="contained"
									style={{ cursor: 'pointer' }}
								>
									Add to Cart
								</Button>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1">
								Starting at {image.price}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default ImageCard;
