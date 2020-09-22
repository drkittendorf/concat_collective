import React from 'react';
import { Grid } from '@material-ui/core';
import LoginCard from '../components/LoginCard';

function Login() {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justify='center'
			style={{ minHeight: '100vh' }}
		>
			<LoginCard />
		</Grid>
	);
}

export default Login;
