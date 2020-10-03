import React from 'react';
import './Loading.css'

const loadingLink =
	'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

function Loading() {
	return (
		<div className='spinner'>
			<img src={loadingLink} alt='Loading' />
		</div>
	);
}

export default Loading;
