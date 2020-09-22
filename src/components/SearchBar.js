import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
          id="standard-full-width"
          label="Search here"
          style={{ margin: 8 }}
          placeholder="Javascript"
          helperText="Press enter to submit!!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </div>
  );
}