import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	carousel:{
		paddingBottom: '20px'
	}
});

function IntroCarousel() {
	const classes = useStyles();

	
	return (
		<Grid item xs={12} className={classes.carousel}>
			<Carousel indicators={false}>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/Title.png'
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='/Mission.png'
						alt='Second slide'
					/>

					{/* <Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption> */}
				</Carousel.Item>
				{/* <Carousel.Item>
					<img
						className='d-block w-100'
						src='#'
						alt='Third slide'
					/>
				</Carousel.Item> */}
			</Carousel>
		</Grid>
	);
}

export default IntroCarousel;
