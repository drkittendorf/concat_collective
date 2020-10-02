import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		// textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        width: '75%',
		alignItems: 'center',
		fontSize: '1%'
	},
	img: {
		height: '10vh',
        // borderRadius: '50%',
        padding: '0px 20px 0px 0px '
    },
    imgContainer:{
        display: 'flex',
        justifyContent: 'flex-end'
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

	console.log(user);


	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.headerContainer}>
					<Paper className={classes.paper}>
						<Grid item xs={6} className={classes.imgContainer}>
							<img
								className={classes.paper}
								src={picture}
								alt='Profile'
								className={classes.img}
							/>
						</Grid>
						<Grid item xs={6} >
							<h2>{name}</h2>
							<p>{email}</p>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Profile;
