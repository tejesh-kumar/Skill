import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { AuthUser } from '../provider/AuthProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '50.4rem'
	},
	inputFieldStyle: {
		padding: '1.4rem 0'
	},
	label: {
		paddingBottom: '1rem',

		'& label': {
			fontSize: '1.8rem',
			fontWeight: 500,
			color: theme.palette.text.secondary
		}
	},
	input: {
		'& input': {
			fontSize: '1.8rem',
			padding: '2.3rem',
			width: '100%',
			boxSizing: 'border-box',
			backgroundColor: theme.palette.tertiary.main,
			borderRadius: '0.6rem',
			border: '0.5px solid #CAD8E5',
			boxShadow: '0px 3px 6px #0000000A',

			'&:focus': {
				outline: 'none'
			}
		}
	},
	forgotPassword: {
		color: theme.palette.text.blue,
		fontSize: '1.8rem',
		marginBottom: '4.6rem'
	},
	loginButton: {
		fontSize: '2.2rem',
		color: theme.palette.text.white,
		padding: '2rem',
		border: '0.5px solid #B3C0CC',
		borderRadius: '0.6rem'
	},
	errorStyle: {
		fontSize: '1.8rem',
		fontWeight: 600,
		color: theme.palette.text.red,
		textAlign: 'center'
	}
}));

function LoginForm() {
	const { inputs, setInputs, handleSignin, errors } = useContext(AuthUser);

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSignin();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit}>
				<div className={classes.inputFieldStyle}>
					<div className={classes.label}>
						<label>User Name</label>
					</div>
					<div className={classes.input}>
						<input
							type="text"
							onChange={handleChange}
							name="username"
							placeholder="Your Name"
							value={inputs.username}
						/>
					</div>
				</div>

				<div className={classes.inputFieldStyle}>
					<div className={classes.label}>
						<label>Email Address</label>
					</div>
					<div className={classes.input}>
						<input onChange={handleChange} name="email" placeholder="Your Email" value={inputs.email} />
					</div>
				</div>

				<div className={classes.inputFieldStyle}>
					<div className={classes.label}>
						<label>Password</label>
					</div>

					<div className={classes.input}>
						<input
							type="text"
							onChange={handleChange}
							name="password"
							placeholder="password"
							value={inputs.password}
						/>
					</div>
				</div>

				<div className={classes.forgotPassword}>Forgot password ?</div>

				<div>
					<Button
						className={classes.loginButton}
						fullWidth={true}
						color="primary"
						variant="contained"
						type="submit"
					>
						Login
					</Button>
				</div>
				{errors.length > 0 ? <p className={classes.errorStyle}>{errors}</p> : null}
			</form>
		</div>
	);
}

export default LoginForm;
