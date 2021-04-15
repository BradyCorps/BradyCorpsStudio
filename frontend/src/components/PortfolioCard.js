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
		display: 'flex',
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 900,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	img: {
		maxWidth: '100%',
		maxHeight: '100%',
		boxShadow: '0px 5px 10px grey',
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
	mb: {
		marginBottom: '1rem',
	},
}));

const ImageCard = ({ image }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3} className={classes.paper}>
				<Grid className={classes.mb} container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt={image.name} src={image.image} />
						</ButtonBase>
					</Grid>
				</Grid>
				<Grid item xs={12} container>
					<Grid item xs container direction="column" spacing={2}>
						<Grid item xs>
							<Typography
								className={classes.typography}
								variant="h6"
								component={'div'}
							>
								{image.category}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Typography
						variant="subtitle2"
						gutterBottom
						color="textSecondary"
						className={classes.typography}
					>
						{image.categorydescription}
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="subtitle2" color="textSecondary">
						Resolution: 1920x1080
					</Typography>
				</Grid>
			</Paper>
		</div>
	);
};

export default ImageCard;
