import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {(props.msg === 'invalid') ? (<Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose} severity="error" >
          You need to be signed in to add a card!
              </Alert>
      </Snackbar>)
        :
        (props.msg === 'added' || props.msg === 'newCard') ? (<Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
          <Alert onClose={props.handleClose} severity="success" >
            Card Succesfully Added!
              </Alert>
        </Snackbar>)
          :
        (props.msg === 'wrongInput' || props.msg === 'newCard') ? (<Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
          <Alert onClose={props.handleClose} severity="error" >
            The is something wrong with your link or Title is empty, please check and try again! 
              </Alert>
        </Snackbar>)
          : ''}

    </div>
  );
}






// (num === num) ? "positive" : (num > num) ? "negative" : "zero"; 