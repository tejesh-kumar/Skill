import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import backImg from '../images/iphone.jpg';

import LoginFormContainer from './LoginFormContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		backgroundColor: theme.palette.secondary.main
	},
	heroImg: {
		height: '100vh',
		width: '45vw',
		backgroundImage: `url(${backImg})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	},
	loginContainer: {
		paddingLeft: '23.4rem',
		display: 'flex',
		alignItems: 'center'
	}
}));

function Login() {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth="xl" disableGutters={true}>
			<Grid container>
				<div className={classes.heroImg} />
				<div className={classes.loginContainer}>
					<LoginFormContainer />
				</div>
			</Grid>
		</Container>
	);
}

export default Login;
