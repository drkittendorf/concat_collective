import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50ch',
    
  },
  button: {
    marginTop: theme.spacing(1),
    height: '5ch',
  }
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField className={classes.textField}
          id="standard-full-width"
          placeholder="Javascript"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={classes.button}>Search</Button> 
    </div>
  );
}