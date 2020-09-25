import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
    marginTop: theme.spacing(1.5),
	},
}));

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Skill Level
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Beginner</MenuItem>
        <MenuItem onClick={handleClose}>Intermediate</MenuItem>
        <MenuItem onClick={handleClose}>Expert</MenuItem>
      </Menu>
    </div>
  );
}