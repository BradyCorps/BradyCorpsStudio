import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

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
					<Typography>{children}</Typography>
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

const useStyles = makeStyles({
	appBar: {
		backgroundColor: '#fefefe',
		color: '#000000',
		marginTop: '0.8rem',
	},
	linkTab: {
		fontSize: '1rem',
		letterSpacing: '0.15rem',
	},
});

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
					indicatorColor="primary"
					value={value}
					onChange={handleChange}
					aria-label="nav tabs example"
				>
					<LinkTab
						className={classes.linkTab}
						label="Home"
						href="/"
						{...a11yProps(0)}
					/>
					<LinkTab
						className={classes.linkTab}
						label="Portfolio"
						href="/portfolio"
						{...a11yProps(1)}
					/>
					<LinkTab
						className={classes.linkTab}
						label="Store"
						href="/store"
						{...a11yProps(2)}
					/>
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Home
			</TabPanel>
			<TabPanel value={value} index={1}>
				Portfolio
			</TabPanel>
			<TabPanel value={value} index={2}>
				Store
			</TabPanel>
		</div>
	);
}
