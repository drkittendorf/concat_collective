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

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 500,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function AddResource() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<DialogTitle id='form-dialog-title'>Add Resource</DialogTitle>
			<DialogContent>
				<DialogContentText>Save code here!</DialogContentText>
				{/* where they enter the snippet */}
                <TextField
					margin='dense'
					id='snippet'
					label='snippet'
					type='text'
                    fullWidth
                    variant='outlined'
                    multiline
                    className={classes.formControl}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Cancel
				</Button>
				<Button onClick={handleClose} color='primary'>
					Submit
				</Button>
			</DialogActions>
		</div>
	);
}
