import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ResourceTabs from './ResourceTabs';

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
			<Tooltip title='add new resource' arrow>
				<Button className={classes.button} onClick={handleClickOpen}>
					<AddIcon fontSize='medium' />
				</Button>
			</Tooltip>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<ResourceTabs/>
			</Dialog>
			
		</div>
	);
}
