import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ConcatCards from '../components/ConcatCards';
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';


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
            <ConcatCards msg={'Concat (collective) an opoen space for developers to gather resources and continuously imporove their skillset. Gather, rate,  and consume helpful resources for yourself and your community WELCOME'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <ConcatCards msg={'this for the home'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <ConcatCards msg={'this for the home'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <ConcatCards msg={'this for the home'} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
            <ConcatCards msg={'this for the home'} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}