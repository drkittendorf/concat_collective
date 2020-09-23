import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant="danger"
      className="btn-margin"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;