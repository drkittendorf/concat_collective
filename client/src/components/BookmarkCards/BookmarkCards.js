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
import AddIcon from '@material-ui/icons/Add';


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
          <Typography className={classes.pos} color="textSecondary">
            {category || 'this will be the category'}
          </Typography>
          <Typography variant="body2" component="p">
            <br />
            <Button target="_blank" href={link || 'https://www.google.com'}>
              <Icon className="fas fa-link" />
            </Button>
            <Button size="small" onClick={handleAdd} >
              <Icon className="fas fa-plus" />
            </Button>
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  );
}