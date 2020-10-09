//this is to add a snippet
import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

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
			<DialogContent className={classes.formControl}>
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
				/>
			</DialogContent>
		</div>
	);
}
