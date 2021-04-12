import React from 'react';
import {
	Typography,
	Grid,
	Paper,
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
		maxWidth: 500,
	},
	image: {
		width: 128,
		height: 128,
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
								<Typography
									className={classes.typography}
									gutterBottom
									variant="subtitle1"
								>
									{image.name}
								</Typography>
								<Typography variant="body2">
									{image.location}, {image.province}
								</Typography>

								<Typography variant="body2" gutterBottom color="textSecondary">
									Resolution: 1920x1080
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									className={classes.addTo}
									variant="body2"
									style={{ cursor: 'pointer' }}
								>
									Add to Cart
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1">{image.price}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default ImageCard;
