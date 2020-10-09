import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ResourceTabs from './ResourceTabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function FormDialog(props) {
	const classes = useStyles();

	// const { handleInputLink, linkInput }  = props

	const mobile = useMediaQuery('(max-width:768px)');
	const desktop = useMediaQuery('(min-width:768px)');

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{desktop && (
				<Tooltip title='add new resource' arrow>
					<Button className={classes.button} onClick={handleClickOpen}>
						<AddIcon fontSize='medium' />
					</Button>
				</Tooltip>
			)}
			{mobile && <Button onClick={handleClickOpen}>Add Resource</Button>}

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<ResourceTabs 
				// handleInputLink={handleInputLink}
				// linkInput={linkInput}
				/>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleClose} color='primary'>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
