//this is to add a snippet
import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	formControl: {
		margin: theme.spacing(1),
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	textArea: {
		width: '100%', 
		minHeight: '200px', 
		 
	}
}));

export default function AddResource(props) {
	const classes = useStyles();

	const {
		submitForm,

	} = props

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<DialogTitle id='form-dialog-title'>Add Snippet</DialogTitle>
			<DialogContent className={classes.formControl}>
				<DialogContentText>Save code here!</DialogContentText>
				{/* where they enter the snippet */}
				<TextareaAutosize
				id={'editor'}
				className={classes.textArea}
				aria-label="empty textarea" placeholder="Empty"
					defaultValue="console.log('howdy 🤠')" />
				<Button
					onClick={submitForm}
					fullWidth={true}
					color='primary'>
					Submit
					</Button>

				{/* {children} */}
			</DialogContent>
		</div>
	);
}
