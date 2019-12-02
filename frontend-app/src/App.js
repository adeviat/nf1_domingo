import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'
import { BrowserRouter, Redirect} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Components/Footer";
import Routes from "./components/Footer/Components/Routes";
import Restaurant from "./components/ProductsContainer/components/Restaurant";



class App extends Component {rt


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