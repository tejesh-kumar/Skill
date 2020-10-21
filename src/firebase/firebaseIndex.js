import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

// const admin = require('firebase-admin');
// const projectId = admin.instanceId().app.options.projectId


var firebaseConfig = {
	// apiKey: process.env.REACT_APP_API_KEY,
	// authDomain: process.env.REACT_APP_AUTHDOMAIN,
	// databaseURL: process.env.REACT_APP_BASEURL,
	// // projectId: process.env.REACT_APP_PROJECT_ID,
	// projectId: "ecommerce-firebase-8f5f8",
	// storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	// appId: process.env.REACT_APP_APP_ID,
	// measurementId: process.env.REACT_APP_MEASUREMENT_ID

	apiKey: "AIzaSyDQ87D6O3MoNm8GBuypkBJy5ZMDjZcZZew",
	authDomain: "ecommerce-firebase-8f5f8.firebaseapp.com",
	databaseURL: "https://ecommerce-firebase-8f5f8.firebaseio.com",
	projectId: "ecommerce-firebase-8f5f8",
	storageBucket: "ecommerce-firebase-8f5f8.appspot.com",
	messagingSenderId: "601923305679",
	appId: "1:601923305679:web:b8eaa91477c9386646b7ba",
	measurementId: "G-T2HB2LQSS7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default {
	firebaseConfig
};
