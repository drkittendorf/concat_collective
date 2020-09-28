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
import './Nav.css';

const useStyles = makeStyles({
	link: {
		color: 'white',
		padding: '0px 15px 0px 15px',
	},
	button: {
		// margin: theme.spacing(1.5),
		color: 'white',
	},
	Logo: {
		color: 'white',
		fontSize: '20px',
	},
	black: {
		backgroundColor: 'black',
		marginBottom: '20px',
	},
	space: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

function Nav() {
	const classes = useStyles();
	const { isAuthenticated } = useAuth0();

	return (
		<AppBar position='static' className={classes.black}>
			<Toolbar className={classes.space}>
				{/* <Typography variant="h6" className={classes.title}>
					concat
				</Typography> */}
				<Grid container xs={12}>
					<Grid item xs={6}>
						<Button className={classes.Logo} component={Link} to='/'>
							concat(collective)
						</Button>
					</Grid>

					<Grid item xs={6} className='menuIconList' style={{display:'flex', justifyContent:'flex-end'}}>
						<AddResourceModal />
						<Tooltip title='profile' arrow>
							<Button className={classes.button} component={Link} to='/profile'>
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
				</Grid>

				<MenuDropdown className='menuDropdown' />
			</Toolbar>
		</AppBar>
	);
}

export default Nav;
