import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	mobileButton: {
		color: 'black',
	},
}));

function LogoutButton() {
	//to use styles
	const classes = useStyles();

	const mobile = useMediaQuery('(max-width:768px)');
	const desktop = useMediaQuery('(min-width:768px)');

	const { logout } = useAuth0();

	return (
		<div >
			{desktop && (
				<Tooltip title='logout' arrow>
					<Button
						onClick={() =>
							logout({
								returnTo: window.location.origin,
							})
						}
						className={classes.button}
					>
						<Icon className='fas fa-sign-out-alt'  />
					</Button>
				</Tooltip>
			)}
			{mobile && (
					<Button
						onClick={() =>
							logout({
								returnTo: window.location.origin,
							})
						}
					>
					</Button>
	
			)}
		</div>
	);
}

export default LogoutButton;
