import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./style.css";

import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';

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
  skill: {
    fontSize: 14,
    maring: '20px'
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    marginLeft: '100px'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { title, link, id, category, skill, handleAdd } = props;

  return (
    <Grid item xs={12} sm={6} >
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings"
            onClick={handleAdd}
            >
              {/* <MoreVertIcon /> */}
              <Icon className="fas fa-bookmark" />
            </IconButton>
          }
          title={title || 'this will be the title'}
          subheader={skill || 'this would be the skill level '}
        />
        <CardContent>
          {/* <Typography className={classes.skill} color="textSecondary" gutterBottom >
            {skill || 'this would be the skill level '}
            <i className="fas fa-bookmark"></i>
          </Typography>
          <Typography variant="h5" component="h2">
            {title || 'this will be the title'}
          </Typography> */}
          <Typography className={classes.pos} color="textSecondary">
            {category || 'this will be the category'}
          </Typography>
          <Typography variant="body2" component="p">
            {/* <link href="google.com" > link</link> */}
            <br />
            {/* <Button size="small" onClick={() => console.log('this goes to the resource')} >link to resource </Button> */}
            <Button target="_blank" href={link || 'https://www.google.com'}>
              <Icon className="fas fa-link" />
            </Button>
            {/* <i class="fas fa-link"></i> */}
            {/* <IconButton aria-label="settings" >
              <Icon className="fas fa-link" />
            </IconButton> */}
            {/* <Button size="small" onClick={handleAdd} >Add to Collection</Button> */}
            <Button size="small" onClick={handleAdd} >
              <Icon className="fas fa-plus" />
            </Button>
          </Typography>
        </CardContent>
        <CardActions>
          {/* some kind of conditional here to render 
        if this is in the home page  */}
          {/* <Button size="small" onClick={handleAdd} >Add to Collection</Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}