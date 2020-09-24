import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
    margin: theme.spacing(1.5),
    color: 'white',
	},
}));

function LoginButton() {
  //to use styles
  const classes = useStyles();

  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      variant="primary"
      className={classes.button}
    >
      Log In
    </Button>
  );
};

export default LoginButton;