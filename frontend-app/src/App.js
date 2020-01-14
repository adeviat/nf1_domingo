import React, {Component, useContext} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import { BrowserRouter, Redirect} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Components/Footer";
import Routes from "./components/Footer/Components/Routes";
import HomePage from "./components/HomePage/HomePage";
import {get} from "./components/Helpers/ServerMethods";
import {User} from "./components/Helpers/userReducer";


function App () {
    const {state,dispatch} = useContext(User);



        return (

                <BrowserRouter>
                    <div>
                        <Routes />
                        <Footer/>
                    </div>
                </BrowserRouter>

        );

}

export default App;