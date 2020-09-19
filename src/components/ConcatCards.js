import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nav from '../components/Nav'
import SearchBar from './SearchBar'

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

function ConcatCards() {
  const classes = useStyles();

  return (
    <div >
        this is one card 😅 and this will eventually just be an API call 
      </div>
  );
}

export default ConcatCards; 