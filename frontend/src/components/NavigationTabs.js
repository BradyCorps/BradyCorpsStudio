import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Hidden } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Store from '../pages/Store';
import Cart from '../pages/Cart';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography component={'div'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={event => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const useStyles = makeStyles(theme => ({
	appBar: {
		backgroundColor: '#fefefe',
		color: '#000000',
		marginTop: '2rem',
		[theme.breakpoints.up('lg')]: {
			minHeight: '3.8rem',
		},
		[theme.breakpoints.down('sm')]: {
			height: '3rem',
		},
	},
	linkTab: {
		display: 'flex',
		fontSize: '1rem',
		letterSpacing: '0.15rem',
		[theme.breakpoints.up('lg')]: {
			height: '3.2rem',
			fontSize: '2rem',
		},
		[theme.breakpoints.down('sm')]: {
			height: '3rem',
		},
	},
	icon: {
		[theme.breakpoints.up('lg')]: {
			height: '3.2rem',
			fontSize: '2rem',
			margin: 'auto',
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 0,
			minHeight: 0,
		},
	},
}));

export default function NavigationTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<AppBar className={classes.appBar} position="static">
				<Tabs
					variant="fullWidth"
					indicatorColor="secondary"
					value={value}
					onChange={handleChange}
					aria-label="nav tabs example"
				>
					<LinkTab
						className={(classes.linkTab, classes.icon)}
						label={<Hidden xsDown>Home</Hidden>}
						icon={
							<Hidden smUp>
								<HomeIcon color="primary" fontSize="large"></HomeIcon>
							</Hidden>
						}
						href="/"
						{...a11yProps(0)}
					/>
					<LinkTab
						className={(classes.linkTab, classes.icon)}
						label={<Hidden xsDown>Portfolio</Hidden>}
						icon={
							<Hidden smUp>
								<ViewCarouselIcon
									color="primary"
									fontSize="large"
								></ViewCarouselIcon>
							</Hidden>
						}
						href="/portfolio"
						{...a11yProps(1)}
					/>
					<LinkTab
						className={(classes.linkTab, classes.icon)}
						label={<Hidden xsDown>Store</Hidden>}
						icon={
							<Hidden smUp>
								<StorefrontIcon
									color="primary"
									fontSize="large"
								></StorefrontIcon>
							</Hidden>
						}
						href="/store"
						{...a11yProps(2)}
					/>
					<LinkTab
						className={(classes.linkTab, classes.icon)}
						label={<Hidden xsDown>Cart</Hidden>}
						icon={
							<Hidden smUp>
								<ShoppingCartIcon
									color="primary"
									fontSize="large"
								></ShoppingCartIcon>
							</Hidden>
						}
						href="/cart"
						{...a11yProps(3)}
					/>
				</Tabs>
			</AppBar>

			<TabPanel value={value} index={0}>
				<Home></Home>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Portfolio></Portfolio>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Store></Store>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Cart></Cart>
			</TabPanel>
		</div>
	);
}
