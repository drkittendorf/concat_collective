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
		marginBottom: '30px',
	},
	imgContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
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
	const [bookmarkCards, setBookmarkCards] = useState([]);

	const handleAdd = (id) => (e) => {
		return user ? console.log('bookmark already added') : '';
	};

	function loadBookmarks() {
		API.getBookmarks()
			.then((res) => setBookmarkCards(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a book from the database with a given id, then reloads books from the db
	function deleteBookmark(id) {
		API.deleteBookmarks(id)
			.then((res) => loadBookmarks())
			.catch((err) => console.log(err));
	}

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
				<Grid item xs={10} className={classes.headerContainer}>
					<Grid item xs={6} className={classes.imgContainer}>
						<img src={picture} alt='Profile' className={classes.img} />
					</Grid>
					<Grid item xs={6}>
						<h2>{name}</h2>
						<p>{email}</p>
					</Grid>
				</Grid>
				<Grid container xs={10} spacing={3} justify='flex-start'>
					{data.map((card) => {
						return (
							<BookmarkCards
								profile={true}
								key={card._id}
								{...card}
								handleAdd={handleAdd}
								deleteBookmark={deleteBookmark}
							/>
						);
					}) || <h1>Nothing has been added to your collection yet!</h1>}
				</Grid>
			</Grid>
		</div>
	);
}

export default Profile;
