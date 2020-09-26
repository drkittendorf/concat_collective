import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ConcatCards from '../components/ConcatCards/ConcatCards';
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel'

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import CodeJar from '../components/CodeJar/CodeJar'

import data from '../dummyData.json';
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



export default function FullWidthGrid() {
  const classes = useStyles();
  const [cards, setCards] = useState([])


  useEffect(() => {
    console.log('this is a call')

    // here we set the cards
    // Api.getBookmarks()
    // .then(res => {
    //   setCards(res)
    // })
    setCards(data); 
  }, [])


  const handleAdd = () => {
    console.log('this function will be in charge of adding the book mark to you personal profile');
    
    // Api.saveBookmarks()
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10}>
          <SearchBar />
          <Carousel />
        </Grid>

        <Grid item xs={12} container spacing={3} justify="flex-start" >
          <BookmarkCards handleAdd={handleAdd} />
          <CodeJar />
          {/* {cards.length? cards.map(card => {
              <BookmarkCards/>
          }): ''} */}
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