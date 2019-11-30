import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Components/Footer";
import Routes from "./components/Footer/Components/Routes";

class App extends Component {


    render() {

        return (
            <BrowserRouter>
                <div>
                    <Routes/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;