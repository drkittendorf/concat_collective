import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useAuth0 } from "@auth0/auth0-react";



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

function Profile() {
    const classes = useStyles();
    const { user } = useAuth0();
    const { name, picture, email } = user;

    console.log(user); 

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <img
                            src={picture}
                            alt="Profile"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h2>{name}</h2>
                        <p >{email}</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;