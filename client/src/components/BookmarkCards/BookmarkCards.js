import React from 'react';
//material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//link preview package
import { ReactTinyLink } from 'react-tiny-link';
import { useAuth0 } from '@auth0/auth0-react';

//importing css
import './style.css';

const useStyles = makeStyles({
	root: {
		// minWidth: 275,
		height: '100%',
		borderRadius: '10px',
		backgroundColor: '#ECF0F1',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	skill: {
		fontSize: 14,
		maring: '20px',
	},
	pos: {
		marginBottom: 12,
	},
	icon: {
		marginLeft: '100px',
	},
	linkPreview: {
		width: '100%',
	},
});

export default function SimpleCard(props) {
	const classes = useStyles();
	const { user } = useAuth0();

	const { title, link, _id, category, skill, handleAdd, profile } = props;

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.root}>
				<CardHeader
					action={
						<IconButton aria-label='settings' onClick={handleAdd(_id)}>
							{/* <MoreVertIcon /> */}
							<Icon className='fas fa-bookmark' />
						</IconButton>
					}
					title={title || 'this will be the title'}
					subheader={skill || 'this would be the skill level '}
				/>
				<CardContent>
					<Typography variant='body2' component='p'>
						<Grid item>
							<ReactTinyLink
								className={classes.linkPreview}
								cardSize='large'
								showGraphic={true}
								// maxLine={2}
								// minLine={1}
								url={link}
								description={true}
							/>
						</Grid>

						<Typography className={classes.pos} color='textSecondary'>
							{category || 'this will be the category'}
						</Typography>
						<Button target='_blank' href={link || 'https://www.google.com'}>
							<Icon className='fas fa-link' />
						</Button>
						{user && profile ? (
							'saved'
						) : (
								<Button size='small' onClick={handleAdd(_id)}>
									{/* <Icon className="fas fa-plus" /> */}
									<AddCircleIcon />
									{/* add to collection */}
								</Button>
							)}
						{props.profile ? '' :
							<Button
								onClick={() => props.deleteBookmark(props._id)}
								className='remove'
								variant='primary'
							>
								<HighlightOffIcon />
							</Button>
						}

					</Typography>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Grid>
	);
}

// todo: user log in i want to filter the one he added i dont want to show those

//only gonna show the ones we can add
