import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { firebaseAuth } from '../provider/AuthProvider';
import { Grid, Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '3rem',
		backgroundColor: theme.palette.tertiary.main,
		textAlign: 'center',
		boxShadow: '0 0.1rem 1rem #ddd',
		marginTop: '5rem'
	},
	headingStyle: {
		fontSize: '2rem',
		color: theme.palette.primary.main,
		padding: '0 1rem',
		textTransform: 'capitalize'
		// textAlign: 'center'
	},
	inputFieldStyle: {
		padding: '1.4rem 0',
		'& label': {
			fontSize: '1.6rem',
			padding: '1rem 2rem'
		},
		'& input': {
			fontSize: '1.5rem',
			border: 'none',
			padding: '1.2rem',
			backgroundColor: theme.palette.secondary.main,
			borderRadius: '0.4rem',
			// boxShadow: '0 0.1rem 1rem #ddd',

			'&:focus': {
				outline: 'none'
			}
		}
	},
	btn: {
		fontSize: '1.4rem',
		color: theme.palette.text.white,
		margin: '1rem 0 2rem 0'
	}
}));

const Signup = () => {
	const classes = useStyles();

	const { inputs, setInputs, handleSignup, errors } = useContext(firebaseAuth);
	console.log(errors);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSignup();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(inputs);
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	return (
		// <form onSubmit={handleSubmit}>
		//     Signup

		//     <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
		//     <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
		//     <button>signup</button>
		//     {errors.length > 0 ?
		//         // errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p> )
		//         <p style={{color: 'red'}}>{errors}</p>
		//     : null}
		// </form>

		<Container>
			<Grid container justify="center">
				<Grid
					className={classes.root}
					sm={6}
					md={5}
					lg={4}
					item
					container
					alignItems="flex-start"
					justify="center"
				>
					<Grid item sm={12}>
						<h3 className={classes.headingStyle}>Signup</h3>
					</Grid>

					<Grid item sm={12}>
						<form onSubmit={handleSubmit}>
							<div className={classes.inputFieldStyle}>
								<label>Email Id</label>
								<input
									onChange={handleChange}
									name="email"
									placeholder="Your Email"
									value={inputs.email}
								/>
							</div>

							<div className={classes.inputFieldStyle}>
								<label>Password</label>
								<input
									onChange={handleChange}
									name="password"
									placeholder="Password"
									value={inputs.password}
								/>
							</div>

							<div>
								{/* <button>Login</button> */}
								<Button className={classes.btn} color="primary" variant="contained">
									Signup
								</Button>
							</div>
							{errors.length > 0 ? (
								// errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p> )
								<p style={{ color: 'red' }}>{errors}</p>
							) : null}
						</form>
					</Grid>

					<Link to="/signin">
						<Typography variant="h6">Already registered? Login</Typography>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Signup;
