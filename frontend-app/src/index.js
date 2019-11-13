import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DomingoSignIn from './components/DomingoSignIn/DomingoSignIn'
import DialogEditUser from './components/DialogEditUser/DialogEditUser.js'
import HomePage from'./components/HomePage/HomePage.js'


ReactDOM.render(<HomePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();