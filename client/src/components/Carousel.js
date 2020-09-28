import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import ConcatCards from './ConcatCards/ConcatCards';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import './Crousel.css';

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

function IntroCarousel() {
	const classes = useStyles();
	return (
		<Grid container xs={12}>
			<Grid item xs={12}>
				<Carousel>
					<ConcatCards />
					<ConcatCards />
					<ConcatCards />
				</Carousel>
			</Grid>
		</Grid>
	);
}

export default IntroCarousel;
