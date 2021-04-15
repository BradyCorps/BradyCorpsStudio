import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Hidden } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ViewCarouselOutlinedIcon from '@material-ui/icons/ViewCarouselOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
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
	},
	tabHeight: {
		height: 12,
	},
	linkTab: {
		display: 'flex',
		letterSpacing: '0.15rem',
	},
	icon: {
		[theme.breakpoints.up('lg')]: {
			fontSize: '1rem',

			margin: 'auto',
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 0,
			height: 12,
			fontSize: '0.8rem',
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
					className={classes.tabHeight}
					variant="fullWidth"
					indicatorColor="secondary"
					value={value}
					onChange={handleChange}
					aria-label="nav tabs"
				>
					<LinkTab
						className={(classes.linkTab, classes.icon)}
						label={<Hidden xsDown>Home</Hidden>}
						icon={
							<Hidden smUp>
								<DashboardOutlinedIcon
									color="primary"
									fontSize="default"
								></DashboardOutlinedIcon>
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
								<ViewCarouselOutlinedIcon
									color="primary"
									fontSize="default"
								></ViewCarouselOutlinedIcon>
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
									fontSize="default"
								></StorefrontIcon>
							</Hidden>
						}
						href="/store"
						{...a11yProps(2)}
					/>
					<LinkTab
						className={(classes.linkTab, classes.icon)}
						label={<Hidden xsDown>Cart {`()`}</Hidden>}
						icon={
							<Hidden smUp>
								<ShoppingBasketOutlinedIcon
									color="primary"
									fontSize="default"
								></ShoppingBasketOutlinedIcon>
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
