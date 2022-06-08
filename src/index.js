import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: 'fir-integration-81538.firebaseapp.com',
    databaseURL:
        'https://fir-integration-81538-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'fir-integration-81538',
    storageBucket: 'fir-integration-81538.appspot.com',
    messagingSenderId: '379843952193',
    appId: '1:379843952193:web:dacb55eb5a609e6da1d0c0',
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

