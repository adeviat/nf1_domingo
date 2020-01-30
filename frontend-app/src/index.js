import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {UserProvider} from "./components/Helpers/userReducer.js";
import DomingoSignIn from './components/DomingoSignIn/DomingoSignIn'
import DialogEditUser from './components/DialogEditUser/DialogEditUser.js'
import HomePage from './Views/HomePage/HomePage.js'

import { BrowserRouter} from "react-router-dom";
import App from "./App";


//ReactDOM.render( <HomePage />, document.getElementById('root'));
ReactDOM.render( <UserProvider><App /></UserProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
