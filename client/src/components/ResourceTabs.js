import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ResourceTabs.css';
import AddResourceForm from './AddResourceForm';
import AddSnippetForm from './SnippetForm/AddSnippetForm'

function TabPanel(props) {
	const { 
		// linkInput,
		// handleInputLink, 
		children, 
		value, 
		index,
		 ...other
		 } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
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
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		
	},
	appBar:{
		backgroundColor: '#B6D3D2'
	},
}));

export default function SimpleTabs(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const { children } = props 
	
	// const { handleInputLink, submitForm, linkInput }  = props
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>

			<AppBar position='static' className={classes.appBar}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
					indicatorColor='primary'
				>
					<Tab label='Add Resource' {...a11yProps(0)} />
					<Tab label='Add Snippet' {...a11yProps(1)} />
				</Tabs>
			</AppBar>

			{/* link resource add tab */}
			<TabPanel value={value} index={0}>
                {/* <AddResourceForm
				// handleInputLink={handleInputLink}
				// linkInput={linkInput}
				/> */}
				{children[0]}
			</TabPanel>
			{/* snippet resource add tab  */}
			<TabPanel value={value} index={1}>
				{/* <AddSnippetForm 
				
				/> */}
				{children[1]}
			</TabPanel>

		</div>
	);
}
