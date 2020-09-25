import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./style.css";




const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: '10px',
    height: '220px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let { title, link, id, category, skill, handleAdd } = props;

  return (
    <Grid item xs={12} sm={6} >
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom >
            {'Beginner' || skill}
          </Typography>
          <Typography variant="h5" component="h2">
            {'Title descriptor ' || title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {'category' || category}
          </Typography>
          <Typography variant="body2" component="p">
            {/* <link href="google.com" > link</link> */}
            <br />
            {/* <Button size="small" onClick={() => console.log('this goes to the resource')} >link to resource </Button> */}
            <Button target="_blank" href={link}>link to resource</Button>
          </Typography>
        </CardContent>
        <CardActions>
          {/* some kind of conditional here to render 
        if this is in the home page  */}
          <Button size="small" onClick={handleAdd} >Add to Collection</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}