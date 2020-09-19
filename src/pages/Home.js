import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ConcatCards from '../components/ConcatCards';
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';


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
        <Nav/>
      <Grid container spacing={3}>
         <Grid xs={1}/>
        <Grid  item xs={10}>
            <SearchBar/>
        </Grid>
        <Grid xs={1}/>
        <Grid xs={1}/>
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
        <ConcatCards/>
        </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
        <ConcatCards/>
        </Paper>
        </Grid>
        <Grid xs={1}/>
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
        <ConcatCards/>
        </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
        <ConcatCards/>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}