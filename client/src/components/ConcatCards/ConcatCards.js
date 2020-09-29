import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		borderRadius: 0,
	},
	paper: {
		textAlign: 'center',
		fontSize: '15px',
		color: theme.palette.text.primary,
	},
}));

function ConcatCards(props) {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={12}>
			<Card className={classes.root}>
				<CardContent className={classes.paper}>
					<p>
						Concat (collective) is an open space for developers to gather
						resources and continuously imporove their skillset.
						<br />
						<br />
						Gather, rate, and consume helpful resources for yourself and your
						community
						<br />
						<br />
						<strong>WELCOME</strong>
					</p>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default ConcatCards;
