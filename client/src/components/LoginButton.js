import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
}));

function LoginButton() {
	//to use styles
	const classes = useStyles();

	const { loginWithRedirect } = useAuth0();

	return (
		<Tooltip title='login' arrow>
			<Button
				onClick={() => loginWithRedirect()}
				variant='primary'
				className={classes.button}
			>
				<Icon className='fas fa-sign-in-alt' fontSize='medium' />
			</Button>
		</Tooltip>
	);
}

export default LoginButton;
