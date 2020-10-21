import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
	const [ inputs, setInputs ] = useState({ email: '', password: '' });
	const [ errors, setErrors ] = useState([]);
	const [ token, setToken ] = useState(null);
	const [ loggedIn, setLoggedIn ] = useState(false);

	const handleSignup = () => {
		console.log('handleSignup');
		authMethods.signup(inputs.email, inputs.password, setErrors, setToken, setLoggedIn);
	};

	const handleSignin = () => {
		console.log('handleSignin!!!!');
		authMethods.signin(inputs.email, inputs.password, setErrors, setToken, setLoggedIn);
		console.log(errors, token);
	};

	const handleSignout = () => {
		authMethods.signout(setErrors, setToken, setLoggedIn);
    };
    
    // useEffect(() => {
    //     const token = JSON.parse(localStorage.getItem('token'))
    //     if(token === null) {
    //         setLoggedIn(false)
    //     }
    //     else{
    //         setLoggedIn(true)
    //         setToken(token)
    //     }
        
    // }, [])

	return (
		<firebaseAuth.Provider
			value={{
				inputs,
				setInputs,
				loggedIn,
				setLoggedIn,
				handleSignup,
				handleSignin,
				handleSignout,
				errors,
				token
			}}
		>
			{props.children}
		</firebaseAuth.Provider>
	);
};

export default AuthProvider;
