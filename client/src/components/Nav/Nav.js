import React, { useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddResourceModal from '../AddResourceModal';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Nav.css';

const useStyles = makeStyles({
	button: {
		color: 'white',
	},
	black: {
		backgroundColor: '#1D3437',
		marginBottom: '20px',
		height: '7rem',
	},
	space: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: '15px'
	},
	menuIcon: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
});

function Nav() {
	const classes = useStyles();
	const { isAuthenticated } = useAuth0();


	// modal state for modal form 
	const [linkInput, setLinkInput] = useState('')

	const matches = useMediaQuery('(min-width:768px)');
	const mobile = useMediaQuery('(max-width:768px)');

	const handleInputLink = (e) => {
		const { name, value } = e.target;
		console.log(name, value)
		setLinkInput(e.target)
	}

	// console.log(handleInputLink)

	// function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({ ...formObject, [name]: value })
    // };

	// const submitForm = () => {
	// 	// send the new card to the database 
	// 	// make api call to the server
	// 	console.log(`you pressed the submit button`) 
	// }


	return (
		<Grid container>
			<AppBar position='static' className={classes.black}>
				<Toolbar className={classes.space}>
					<Grid item xs={6}>
						<Button className={classes.logo} component={Link} to='/'>
							<img
								src='/concatCollective.png'
								alt='concat(collective)'
							/>
						</Button>
					</Grid>

					{matches && (
						<Grid item xs={6} className={classes.menuIcon}>
							<AddResourceModal 
							handleInputLink={handleInputLink}
							linkInput={linkInput} 
							/>
							<Tooltip title='profile' arrow>
								<Button
									component={Link}
									to='/profile'
									className={classes.button}
								>
									<PersonIcon />
								</Button>
							</Tooltip>
							<Tooltip title='home' arrow>
								<Button component={Link} to='/home' className={classes.button}>
									<HomeIcon />
								</Button>
							</Tooltip>
							{isAuthenticated ? <LogoutButton /> : <LoginButton />}
						</Grid>
					)}

					{mobile && (
						<MenuDropdown className='menuDropdown' />
					)}

				</Toolbar>
			</AppBar>
		</Grid>
	);
}

export default Nav;
