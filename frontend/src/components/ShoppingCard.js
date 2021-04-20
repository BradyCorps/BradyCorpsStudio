import React, { useState, useEffect } from 'react';
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
	InputLabel,
	FormControl,
	Select,
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Input,
} from '@material-ui/core';
import axios from 'axios';

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
		width: '95%',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: 4,
	},
	modalImg: {
		margin: 'auto',
		display: 'flex',
		maxWidth: '100%',
		maxHeight: '100%',
		boxShadow: '0px 0px 12px rgba(100, 100, 100, 0.6)',
	},
	portraitImg: {
		margin: 'auto',
		display: 'block',
		width: '100%',
		height: '100%',

		boxShadow: '0px 0px 12px rgba(100, 100, 100, 0.6)',
	},
	mb: {
		marginBottom: '1.5rem',
	},
	containment: {
		height: '75vh',
		width: '80vw',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	formContainter: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
	},
}));

const ShoppingCard = ({ image }) => {
	const classes = useStyles();

	// Modal handles
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// Menu Anchors
	const [style, setStyle] = React.useState('');

	const [dropOpen, menuOpen] = React.useState(false);

	const handleChange = e => {
		setStyle(e.target.value);
	};

	const menuSetOpen = () => {
		menuOpen(true);
	};
	const menuClose = () => {
		menuOpen(false);
	};

	const [styles, setStyles] = useState([]);

	useEffect(() => {
		const fetchStyles = async () => {
			const { data } = await axios.get('/api/printStyle');

			setStyles(data);
		};
		fetchStyles();
	}, []);

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
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1">
								Starting at {image.price}
							</Typography>
						</Grid>

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
									<Grid container spacing={2} className={classes.mb}>
										<Grid item className={classes.containment}>
											<img
												className={classes.modalImg}
												src={image.image}
												alt={image.name}
											></img>
										</Grid>
										<Box
											display="flex"
											flexDirection="row"
											alignItems="flex-end"
										>
											<Button
												variant="contained"
												color="secondary"
												onClick={menuSetOpen}
											>
												Print Styles
											</Button>

											<Dialog
												disableBackdropClick
												disableEscapeKeyDown
												open={dropOpen}
												onClose={menuClose}
											>
												<DialogTitle>Fill the form</DialogTitle>
												<DialogContent>
													<form className={classes.formContainter}>
														<FormControl className={classes.formControl}>
															<InputLabel htmlFor="demo-dialog-native">
																Print Style
															</InputLabel>
															<Select
																native
																value={style}
																onChange={handleChange}
																input={<Input id="demo-dialog-native" />}
															>
																<option aria-label="None" value="" />

																{styles.map(style => (
																	<option>{`${style.print}`}</option>
																))}
															</Select>
														</FormControl>
														<FormControl>
															<InputLabel htmlFor="demo-dialog-native">
																Size
															</InputLabel>
															<Select
																native
																value={style}
																onChange={handleChange}
																input={<Input id="demo-dialog-native" />}
															>
																<option aria-label="None" value="" />
																{styles.map(style =>
																	style.options.map(option => (
																		<option>{`${option.size} ${option.price}`}</option>
																	))
																)}
															</Select>
														</FormControl>
													</form>
												</DialogContent>
												<DialogActions>
													<Button onClick={menuClose} color="primary">
														Cancel
													</Button>
													<Button onClick={menuClose} color="primary">
														Add to Cart
													</Button>
												</DialogActions>
											</Dialog>
										</Box>
									</Grid>
								</Container>
							</Fade>
						</Modal>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default ShoppingCard;
