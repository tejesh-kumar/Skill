import firebase from 'firebase';

import firebaseConfig from './firebaseIndex';

export const authMethods = {
	signup: (email, password, setErrors, setToken, setLoggedIn) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async (res) => {
				console.log(res);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(window.localStorage.token);
				setLoggedIn(true);
			})
			.catch((err) => {
				// setErrors(prev => ([...prev, err.message]))
				setErrors(err.message);
			});
	},
	signin: (email, password, setErrors, setToken, setLoggedIn) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(async (res) => {
				console.log(res);
				const token = await Object.entries(res.user)[5][1].b;
				await localStorage.setItem('token', token);
				setToken(window.localStorage.token);
				setLoggedIn(true);
			})
			.catch((err) => {
				// setErrors(prev => ([...prev, err.message]))
				setErrors(err.message);
			});
	},
	signout: (setErrors, setToken, setLoggedIn) => {
		firebase
			.auth()
			.signOut()
			.then((res) => {
				localStorage.removeItem('token');
				setToken(null);
				setLoggedIn(false);
			})
			.catch((err) => {
				setErrors(err.message);
				localStorage.removeItem('token');
				setToken(null);
				setLoggedIn(false);
				console.error(err.message);
			});
	}
};
