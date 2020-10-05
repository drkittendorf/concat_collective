import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from '../components/SearchBar';
import Typography from '@material-ui/core/Typography';
import API from '../utils/API';
import data from '../dummyData.json';
import BookmarkCards from '../components/BookmarkCards/BookmarkCards';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
	},
	img: {
		height: '150px',
		// borderRadius: '50%',
		padding: '0px 20px 0px 0px ',
		marginBottom: '30px'
	},
	imgContainer: {
		display: 'flex',
<<<<<<< HEAD
		justifyContent: 'flex-end',
		alignItems: 'center',
=======
		justifyContent: 'flex-start'
>>>>>>> 2c374e91753875b1684a68d8cc41fd36b6c67101
	},
	headerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

function Profile() {
	const classes = useStyles();
	const { user } = useAuth0();
	const { name, picture, email } = user;

	const handleAdd = (id) => (e) => {
		return user ? console.log('bookmark already added') : '';
	};

<<<<<<< HEAD
	// user action to add a new card to the array
	// get user bookmarks actions
	// get home page bookmarks
	// home action to add a new card to the array
	// save all bookmarks
	// and save the only key id in the arrays

	// authencation is this correct
	// authorize

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify='center'>
				<Grid item xs={12} sm={10} className={classes.headerContainer}>
						<Grid item xs={6} className={classes.imgContainer}>
=======
	{
		// user action to add a new card to the array 
		// get user bookmarks actions
		// get home page bookmarks 
		// home action to add a new card to the array 
		// save all bookmarks 
		// and save the only key id in the arrays



		// authencation is this correct 
		// authorize 
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify="center">
				{/* profile info  */}
				<Grid item xs={12} className={classes.headerContainer}>
					<Paper className={classes.paper}>
						<Grid item xs={4} className={classes.imgContainer}>
>>>>>>> 2c374e91753875b1684a68d8cc41fd36b6c67101
							<img
								src={picture}
								alt='Profile'
								className={classes.img}
							/>
						</Grid>
<<<<<<< HEAD
						<Grid item xs={6}>
							<h2>{name}</h2>
=======
						<Grid item xs={2} >
							<h4>{name}</h4>
>>>>>>> 2c374e91753875b1684a68d8cc41fd36b6c67101
							<p>{email}</p>
						</Grid>
				</Grid>
<<<<<<< HEAD
				<Grid container xs={12} sm={10}  spacing={3} justify='flex-start'>
					{data.map((card) => {
						return (
							<BookmarkCards
=======
				{/* cards added by the user  */}
				<Grid 
				item xs={12} 
				spacing={3} 
				container
				justify="flex-start" >
					{
						data.map(card => {
							return <BookmarkCards
>>>>>>> 2c374e91753875b1684a68d8cc41fd36b6c67101
								profile={true}
								key={card._id}
								{...card}
								handleAdd={handleAdd}
							/>
						);
					}) || <h1>Nothing has been added to your collection yet!</h1>}
				</Grid>
			</Grid>
		</div>
	);
}

export default Profile;


