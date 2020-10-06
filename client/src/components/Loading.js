import React from 'react';
import './Loading.css'

const loadingLink =
	'/30.gif';

function Loading() {
	return (
		<div className='spinner'>
			<img src={loadingLink} alt='Loading' />
		</div>
	);
}

export default Loading;
