import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import './MenuDropdown.css';
import { Link } from 'react-router-dom';
import AddResourceModal from '../AddResourceModal';

export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const [open, setOpen] = React.useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const { isAuthenticated } = useAuth0();

	return (
		<div>
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
				<MenuItem onClick={handleClickOpen}>
					<AddResourceModal />
				</MenuItem>
				<MenuItem component={Link} to='/profile'>
					<Button>My Profile</Button>
				</MenuItem>
				<MenuItem component={Link} to='/home'>
					<Button>Home</Button>
				</MenuItem>

				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
				
			</Menu>
		</div>
	);
}
