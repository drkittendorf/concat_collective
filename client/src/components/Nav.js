import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddResourceModal from './AddResourceModal';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
	link: {
		color: 'white',
	},
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	black: {
		backgroundColor: 'black',
		marginBottom: '20px',
		height: '7rem'
	},
	space: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuIcon: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
});

function Nav() {
	const classes = useStyles();
	const matches = useMediaQuery('(min-width:768px)');
	const { isAuthenticated } = useAuth0();

	return (
		<Grid container xs={12}>
			<AppBar position='static' className={classes.black}>
				<Toolbar className={classes.space}>
					<Grid item xs={6}>
						<Button className={classes.Logo} component={Link} to='/'>
							<img className={classes.img} src='/concatCollective.png' alt='concat(collective)' />
						</Button>
					</Grid>

					{matches && (
						<Grid item xs={6} className={classes.menuIcon}>
							<AddResourceModal />
							<Tooltip title='profile' arrow>
								<Button
									className={classes.button}
									component={Link}
									to='/profile'
								>
									<PersonIcon fontSize='medium' />
								</Button>
							</Tooltip>
							<Tooltip title='home' arrow>
								<Button className={classes.button} component={Link} to='/home'>
									<HomeIcon fontSize='medium' />
								</Button>
							</Tooltip>
							{isAuthenticated ? <LogoutButton /> : <LoginButton />}
						</Grid>
					)}

					<MenuDropdown className='menuDropdown' />
				</Toolbar>
			</AppBar>
		</Grid>
	);
}

export default Nav;
