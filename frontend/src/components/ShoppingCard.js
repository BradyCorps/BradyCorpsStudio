import React from 'react';
import {
	Typography,
	Grid,
	Paper,
	Button,
	ButtonBase,
	makeStyles,
	Modal,
	Backdrop,
	Fade,
	Container,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	rootPaper: {
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
	// Modal Styling
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
	},
	modalPaper: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		width: '90vw',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: 4,
	},
	modalImg: {
		margin: 'auto',
		display: 'block',
		width: '80vw',
		height: '100%',
		maxHeight: '80vh',
		maxWidth: '100%',
		boxShadow: '0px 0px 12px rgba(100, 100, 100, 0.6)',
	},
	mb: {
		marginBottom: '1.5rem',
		display: 'flex',
	},
}));

const ImageCard = ({ image }) => {
	const classes = useStyles();

	// Modal handles
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.rootPaper}>
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
									type="button"
									onClick={handleOpen}
									className={classes.addTo}
									variant="contained"
									style={{ cursor: 'pointer' }}
								>
									View Options
								</Button>

								{/* Modal */}

								<Modal
									aria-labelledby="transition-modal-title"
									aria-describedby="transition-modal-description"
									className={classes.modal}
									open={open}
									onClose={handleClose}
									closeAfterTransition
									BackdropComponent={Backdrop}
									BackdropProps={{
										timeout: 500,
									}}
								>
									<Fade in={open}>
										<Container className={classes.modalPaper}>
											<Grid container direction="row">
												<Grid item className={classes.mb}>
													<div className={classes.containment}>
														<img
															className={classes.modalImg}
															src={image.image}
															alt={image.name}
														></img>
													</div>
													<Grid>
														<Button variant="contained">Add to Cart</Button>
													</Grid>
												</Grid>

												<Typography variant="subtitle1">
													react-transition-group animates me.
												</Typography>
											</Grid>
										</Container>
									</Fade>
								</Modal>
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
