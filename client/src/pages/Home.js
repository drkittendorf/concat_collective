import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ConcatCards from '../components/ConcatCards/ConcatCards';
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import CodeJar from '../components/CodeJar/CodeJar'

import data from '../dummyData.json';


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
    setCards(data); 
  }, [])

  return (
    <div className={classes.root}>
      <Grid container justify="center" >
        <Grid item xs={12} >
          {/* <Nav /> */}
          <SearchBar />
        </Grid>
        <Grid item xs={10} className={classes.margin} >
          <ConcatCards />
        </Grid>
        <Grid item xs={12} container spacing={3} justify="flex-start" >
          <BookmarkCards />
          <CodeJar />
          {/* {cards.length? cards.map(card => {
              <BookmarkCards   />
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