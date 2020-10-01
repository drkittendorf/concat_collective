import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function IntroCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<img className='d-block w-100' src='/heading1.png' alt='First slide' />
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src='/heading1.png' alt='Third slide' />

				{/* <Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src='/heading1.png' alt='Third slide' />
			</Carousel.Item>
		</Carousel>
	);
}

export default IntroCarousel;
