import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/testCarousel/Carousel';
import { useAuth0 } from '@auth0/auth0-react';

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import CodeJar from '../components/CodeJar/CodeJar'

import API from '../utils/API';
import transform from '../utils/Transform';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: '100%',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	margin: {
		marginBottom: '20px',
	},
}));

// data[0].

export default function FullWidthGrid() {
	const classes = useStyles();
	const [bookmarkCards, setBookmarkCards] = useState([]);
	const [codeCards, setCodeCards] = useState({});
	const { user } = useAuth0();

	console.log(Boolean(user));

	useEffect(() => {
		// promise.all([Api.getBookmarks, getUserBookmarks]).then(([resGetBookmarks, resGetUserBookmarks]) => {

		//
		//  setBookmarkCards(resGetUserBookmarks.toObject   ===  resGetBookmarks)
		//})

		// call for an email and if no matched trigger create
		// unique

		// dont create a user
		// just the user and get us their ID

		// if not create a the user

		// if(user){
		//   Api.createUse(user).then
		// }

		API.getBookmarks().then((res) => {
			// if (user) {
			//   res.data.filter(fiteredCards => {
			//     fiteredCards //
			////compare to the user cards  turn the arr in user
			//   })
			// } else {
			setBookmarkCards(res.data);
			// }
		});
		API.getSnippets().then((res) => {
			const cardData = transform.toObject(res.data);
			setCodeCards(cardData);
		});
	}, []);

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

	const handleAdd = (id) => (e) => {
		// filter the cards here too

		// I think this is saying
		// save a previous value and then do something else // carrying
		// get this id and then => send this callback function too
		e.preventDefault();

		let card = transform.toObject(
			bookmarkCards.concat(transform.toArray(codeCards))
		);

		if (card[id].snippet && user) {
			console.log('this is a code card send it here');
			console.log(card[id]['_id']);
			// Api.saveBookmarks(card[id],)
		} else if (user) {
			console.log('this is not a code card send it here');
			console.log(card[id]['_id']);
			// Api.saveBookmarks(card[id])
		} else {
			console.log(`you must be signed in to add a card to your card! `);
		}
	};

	const setCodeWrapper = (id) => (snippet) => {
		// where is the snippet parameter being used in this fucntion
		// I want this info first // let me save it and the do something else
		// ! and do we need it
		// ! where is the snippet coming from
		// ** snippet is coming from the source code

		// just setting each card to have an id as the key and then
		// then rest of the object as the value of the key
		setCodeCards({ ...codeCards, [id]: { ...codeCards[id], snippet } });
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify='center'>
				<Grid item xs={12} md={10}>
					<Carousel />
					<SearchBar />
					{/* filter buttons here */}
				</Grid>
				<Grid item xs={10} container spacing={3} justify='flex-start'>
					{bookmarkCards.map((card) => {
						return (
							<BookmarkCards
								key={card._id}
								{...card}
								handleAdd={handleAdd}
								deleteBookmark={deleteBookmark}
							/>
						);
					})}

					{Object.keys(codeCards).map((key) => {
						const card = codeCards[key];
						return (
							<CodeJar
								key={card._id}
								{...card}
								handleAdd={handleAdd}
								setCode={setCodeWrapper(card._id)}
							/>
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
}

// todo: live chat with help v2  => problem
// todo: create new collection
// todo: code cards get thing
// todo: code accordion
// todo: delete from you own but not global
// todo: search code cards or links
// todo: search slider for categories (filters)
// => new bookmarks or code

// todo: sandbox api
// todo: minigame:

// todo: emoji: rick roll link [DONE]
// todo: (newlyConcated) (language(dropdowm))
