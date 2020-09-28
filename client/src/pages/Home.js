import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel'

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import CodeJar from '../components/CodeJar/CodeJar'

import data from '../dummyData.json'
import Api from '../utils/API'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%'
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
  const [codeCards, setCodeCards] = useState([]); 


  useEffect(() => {
    console.log('this is a call')

    // set the booksmarks cards 
    Api.getBookmarks()
    .then(res => {
      let data = res.data 
      setBookmarkCards(data);
      console.log(data)
    })
    // Api.getBookmarks().then(res => {
    //   console.log('hello res')

   


    // ! calling the data for now till we get the backendworking
    // setCards(data);
  }, [])


  const handleAdd = () => {
    console.log('this function will be in charge of adding the book mark to you personal profile');

    // Api.saveBookmarks()
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10}>
          <Carousel />
          <SearchBar />
          {/* filter buttons here */}
        </Grid>

        <Grid item xs={12} container spacing={3} justify="flex-start" >
          {/* <BookmarkCards handleAdd={handleAdd} /> */}
          <CodeJar />
          {bookmarkCards.map(card => {
            return <BookmarkCards {...card} />
          })}
          {/* <BookmarkCards
            skill={'hello'} 
            title={'is this title showing up? '}
            /> */}
        </Grid>
      </Grid>
    </div>
  );
}

// {this.state.friends.map(friend => (
//   <FriendCard
//     removeFriend={this.removeFriend}
//     id={friend.id}
//     key={friend.id}
//     name={friend.name}
//     image={friend.image}
//     occupation={friend.occupation}
//     location={friend.location}
//   />
// ))}


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