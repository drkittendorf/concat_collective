import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

function ConcatCards(props) {
  // const classes = useStyles();

  return (
    <div >
       {props.msg}
      </div>
  );
}

export default ConcatCards; 