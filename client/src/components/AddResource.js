import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
	button: {
    margin: theme.spacing(1.5),
    color: 'white',
	},
}));

export default function FormDialog() {
	const classes = useStyles();
	
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton className={classes.button} onClick={handleClickOpen}>
				<AddIcon />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Add Resource</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Find something cool? Add it to the collection! 
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='category'
						type='text'
						fullWidth
					/>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='link'
						type='text'
						fullWidth
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
			</Dialog>
		</div>
	);
}
