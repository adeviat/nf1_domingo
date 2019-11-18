import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import { BrowserRouter, Redirect} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Components/Footer";
import Routes from "./components/Footer/Components/Routes";
import HomePage from "./components/HomePage/HomePage";

class App extends Component {


    render() {

        return (
            <BrowserRouter>
                <div>
                    <Routes />
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;