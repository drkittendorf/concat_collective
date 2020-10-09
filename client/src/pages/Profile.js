import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import transform from '../utils/Transform.js';
import data from '../dummyData.json';

import BookmarkCards from '../components/BookmarkCards/BookmarkCards';
import CodeJar from '../components/CodeJar/CodeJar';

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

/// send the token to the backend so that both parts are in sync

function Profile() {
	const classes = useStyles();
	const { user } = useAuth0();
	const { name, picture, email } = user;

	const [bookmarkCards, setBookmarkCards] = useState({});
	const [codeCards, setCodeCards] = useState({});


	useEffect(() => {

		API.getUserCards(user.email)
			.then(userData => {

				let userBookmarks = (userData.data[0].userBookmarks)
				let userSnippets = (userData.data[0].userSnippets)

				setBookmarkCards(transform.toObject(userBookmarks))
				setCodeCards(transform.toObject(userSnippets))

			})

	}, [])


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


	function loadSnippets() {
		API.getSnippets()
			.then((res) => setCodeCards(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a book from the database with a given id, then reloads books from the db
	function deleteSnippet(id) {
		API.deleteSnippets(id)
			.then((res) => loadSnippets())
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

	const setCodeWrapper = (id) => (snippet) => {
		setCodeCards({ ...codeCards, [id]: { ...codeCards[id], snippet } })
	}

	const handleDelete = (id) => (e) => {
		e.prevetDefault();


		// ** GET USER DATA
		// let response = await Api.getUsersByEmail()

		// ** turn array of users to Object 
		// let usersDatabase = await transform.toObjectByEmail(response.data)

		// usersDatabase[user.email]
		/// >>>>>>>>
		// api call to the user api/userAPI

		//Api.deleteBookmark(user.email,id)
	}

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
					{Object.keys(bookmarkCards).map(key => {
						const card = bookmarkCards[key]
						return <BookmarkCards
							profile={true}
							key={card._id} {...card}
							handleAdd={handleAdd}
							handleDelete={handleDelete(card._id)}
						/>
					})}
					{Object.keys(codeCards).map(key => {
						const card = codeCards[key]
						return <CodeJar
							profile={true}
							key={card._id} {...card}
							handleAdd={handleAdd}
							setCode={setCodeWrapper(card._id)}
						/>
					})}
				</Grid>
			</Grid>
		</div>
	);
}

export default Profile;
