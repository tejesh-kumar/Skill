import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthUser = React.createContext();

const AuthProvider = (props) => {
	const [ inputs, setInputs ] = useState({ username: '', email: '', password: '' });
	const [ errors, setErrors ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ modalOpen, setModalOpen ] = useState(false);

	const history = useHistory();

	useEffect(
		() => {
			const user = JSON.parse(localStorage.getItem('user'));
			if (user) {
				setUsername(user.username);
			} else {
				setUsername('User');
			}
		},
		[ loggedIn ]
	);

	const handleValidity = () => {
		const mailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
		if (inputs.password.length >= 6 && inputs.email.match(mailPattern) && inputs.username.length >= 6) {
			return true;
		}
		return false;
	};

	const handleSignin = () => {
		// form
		const isValid = handleValidity();

		if (isValid === true) {
			console.log(handleValidity());
			const randId = Math.floor(Math.random() * 68385945);
			history.push('/skill');
			localStorage.setItem('user', JSON.stringify({ ...inputs, id: randId }));
			setLoggedIn(true);
		}

		if (!inputs.password) {
			setErrors('Password cannot be empty');
		} else {
			if (inputs.password.length < 6) {
				setErrors('Password should be atleast 6 characters');
			}
		}

		if (!inputs.email) {
			setErrors('Email Address cannot be empty');
		} else {
			const mailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
			if (!inputs.email.match(mailPattern)) {
				setErrors('Incorrect Email Address');
			}
		}

		if (!inputs.username) {
			setErrors('Username cannot be empty');
		} else {
			if (inputs.username.length < 6) {
				setErrors('Username should be atleast 6 characters');
			}
		}
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
				handleSignin,
				handleModalOpen,
				errors
			}}
		>
			{props.children}
		</AuthUser.Provider>
	);
};

export default AuthProvider;
