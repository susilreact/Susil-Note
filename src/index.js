import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyBmV7pk0T70qnUzhLxaSFlVa3GRWks3XAA',
	authDomain: 'evernote-clone-ddc09.firebaseapp.com',
	databaseURL: 'https://evernote-clone-ddc09.firebaseio.com',
	projectId: 'evernote-clone-ddc09',
	storageBucket: 'evernote-clone-ddc09.appspot.com',
	messagingSenderId: '180809181886',
	appId: '1:180809181886:web:2d9363f6dbe443f49cccef'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
