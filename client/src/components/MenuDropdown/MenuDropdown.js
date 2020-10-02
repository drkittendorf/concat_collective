import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import './MenuDropdown.css';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const { isAuthenticated } = useAuth0();

	return (
		<div className='menuDropdown'>
			<Button
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				<MenuIcon style={{ color: 'white' }} />
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					Add Resource
				</MenuItem>
				<MenuItem onClick={handleClose} component={Link} to='/profile'>My Profile</MenuItem>
				<MenuItem onClick={handleClose} component={Link} to='/home'>Home</MenuItem>
				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			</Menu>
		</div>
	);
}
