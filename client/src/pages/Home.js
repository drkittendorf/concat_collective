import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/testCarousel/Carousel'

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import CodeJar from '../components/CodeJar/CodeJar'

import Api from '../utils/API'
import transform from '../utils/transform'


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
    marginBottom: '20px'
  }
}));

// data[0].

export default function FullWidthGrid() {
  const classes = useStyles();
  const [bookmarkCards, setBookmarkCards] = useState([]);
  const [codeCards, setCodeCards] = useState({});

  useEffect(() => {
    Api.getBookmarks().then(res => setBookmarkCards(res.data))
    Api.getSnippets().then(res => {

      const cardData = transform.toObject(res.data)
      setCodeCards(cardData)
    }) 
  }, [])

  const handleAdd = (id) => (e) => {
    e.preventDefault();
    // find the card in the array 
    // ** then send it to the user database 
    // dispatch(deleteUser(id));

    // turn array to object? 
    let card = transform.toObject(bookmarkCards.concat(transform.toArray(codeCards)))
    // send this object to the be saved as a new entry for the user database 
    // so this will probably need to be pushed to the array in the in the database 
    if (card[id].snippet) {
      console.log('this is a code card send it here')
      console.log(card[id]);
    } else {
      console.log('this is not a code card send it here')
      console.log(card[id]);
    }
  }

  const setCodeWrapper = (id) => (snippet) => {
    // where is the snippet parameter being used in this fucntion 
    // and do we need it? 

    // just setting each card to have an id as the key and then
    // then rest of the object as the value of the key 
    setCodeCards({...codeCards, [id]: { ...codeCards[id], snippet } })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10}>
          <Carousel />
          <SearchBar />
          {/* filter buttons here */}
        </Grid>
        <Grid item xs={10} container spacing={3} justify="flex-start" >
          {bookmarkCards.map(card => {
            return <BookmarkCards
              key={card._id} {...card}
              handleAdd={handleAdd}
            />
          })}
          {Object.keys(codeCards).map(key => {
            const card = codeCards[key]
            return <CodeJar
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



// ! modal categories button dropdown cascading
// JavaScript
// React.js
// Node.js
// Python
// HTML
// CSS
// C++
// TypeScript
// Rust
// Scheme
// Java 
// Kotlin
// C#
// Perl
// PHP
// Scala 
// Swift
// MATLAB
// SQL
// R Programming Language
// Golang (Go)
// Ruby
// Other