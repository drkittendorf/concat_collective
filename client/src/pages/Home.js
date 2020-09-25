import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ConcatCards from '../components/ConcatCards';
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import data from '../dummyData.json';
import CodeJar from '../components/CodeJar/CodeJar'


// ! in the navbar create a add feature 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" >
        <Grid item xs={12} >
          <Nav />
        </Grid>
        <Grid item xs={10}>
          <SearchBar />
          <Paper className={classes.paper}>
            <ConcatCards />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <BookmarkCards />
          <BookmarkCards />
          <CodeJar/>
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