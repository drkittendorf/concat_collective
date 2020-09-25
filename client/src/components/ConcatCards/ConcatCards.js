import React from 'react';
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

function ConcatCards(props) {
  const classes = useStyles();

  return (
    <div className='concatCard' >
      <h3>
        Concat (collective) an opoen space for developers to gather resources and continuously imporove their skillset. Gather, rate,  and consume helpful resources for yourself and your community WELCOME
      </h3>
    </div>
  );
}

export default ConcatCards; 