import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthUser = React.createContext();

const AuthProvider = (props) => {
	const [ inputs, setInputs ] = useState({ username: '', email: '', password: '' });
	const [ errors, setErrors ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ validUsername, setValidUsername ] = useState(false);
	const [ validEmail, setValidEmail ] = useState(false);
	const [ validPassword, setValidPassword ] = useState(false);

	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ modalOpen, setModalOpen ] = useState(false);

	const history = useHistory();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		console.log(user);
		setUsername(user.username);
	}, []);

	const handleSignup = () => {
		// authMethods.signup(inputs.email, inputs.password, setErrors, setToken, setLoggedIn);
	};

	const handleSignin = () => {
		// form validation
		if (!inputs.password) {
			setErrors('Password cannot be empty');
		} else {
			if (inputs.password.length < 6) {
				setErrors('Password should be atleast 6 characters');
			} else {
				setValidPassword(true);
			}
		}

		if (!inputs.email) {
			setErrors('Email Address cannot be empty');
		} else {
			const mailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
			if (!inputs.email.match(mailPattern)) {
				setErrors('Incorrect Email Address');
			} else {
				setValidEmail(true);
			}
		}

		if (!inputs.username) {
			setErrors('Username cannot be empty');
		} else {
			if (inputs.username.length < 6) {
				setErrors('Username should be atleast 6 characters');
			} else {
				setValidUsername(true);
			}
		}

		if (validUsername === true && validEmail === true && validPassword === true) {
			console.log('login');
			const randId = Math.floor(Math.random() * 68385945);
			localStorage.setItem('user', JSON.stringify({ ...inputs, id: randId }));
			history.push('/skill');
			setLoggedIn(true);
		}
	};

	const handleSignout = () => {
		// authMethods.signout(setErrors, setToken, setLoggedIn);
	};

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	useEffect(
		() => {
			setErrors('');
		},
		[ inputs ]
	);

	return (
		<AuthUser.Provider
			value={{
				username,
				inputs,
				setInputs,
				loggedIn,
				setLoggedIn,
				modalOpen,
				handleSignup,
				handleSignin,
				handleSignout,
				handleModalOpen,
				errors
			}}
		>
			{props.children}
		</AuthUser.Provider>
	);
};

export default AuthProvider;
