import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import ConcatCards from './ConcatCards/ConcatCards'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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
 
function IntroCarousel() {
    const classes = useStyles()
    return (
      <Carousel>
          <Paper className={classes.paper}>
            <ConcatCards />
          </Paper>
          <Paper className={classes.paper}>
            <ConcatCards />
          </Paper>
          <Paper className={classes.paper}>
            <ConcatCards />
          </Paper>
      </Carousel>
    ) 
}


export default IntroCarousel;