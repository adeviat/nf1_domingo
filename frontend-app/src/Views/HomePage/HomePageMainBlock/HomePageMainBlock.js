import React from 'react';
import logo from '../HomePageMainBlock/Img/logo.png';
import courier from '../HomePageMainBlock/Img/courier.png';
import farmacia from '../HomePageMainBlock/Img/farmacia.png';
import everything from '../HomePageMainBlock/Img/everything.png';
import food from '../HomePageMainBlock/Img/food.png';
import shop from '../HomePageMainBlock/Img/shop.png';
import supermarket from '../HomePageMainBlock/Img/supermarket.png';
import snacks from '../HomePageMainBlock/Img/snacks.png';
import expand from '../HomePageMainBlock/Img/expand.png';
import { Link } from "react-router-dom";
import '../HomePageMainBlock/Img/HomePageMainBlock.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function HomePageMainBlock() {
    return (
        <div>
            {/* main block desktop*/}
            <div className="container-fluid d-none d-md-flex main-desktop">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <img
                            src={logo}
                            alt="Logo de Glovo"/>
                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                        <h1>Lo que quieras en&nbsp;<span className="select-city">Barcelona <img
                            src={expand}
                            alt="" width="65px"/></span></h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <h2 className="main-subtitle">Recibelo en donde estés</h2>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <Link to="/stores/Courier">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={courier}
                                alt="Courier" width="65px"/><p>Paquetes</p>
                            </div>
                        </Link>
                        <Link to="/stores/Pharmacy">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                                <img
                                    src={farmacia}
                                    alt="Pharmacy" width="65px"/><p>Farmacia</p>
                            </div>
                        </Link>
                        <Link to="/stores/Food">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">

                                <img
                                    src={food}
                                    alt="Food" width="65px"/><p>Comida</p>

                            </div>
                        </Link>
                        <Link to="/stores/Anything">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                                <img
                                    src={everything}
                                    alt="Anything" width="65px"/><p>Anything</p>
                            </div>
                        </Link>
                        <Link to="/stores/Shop">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                                <img
                                    src={shop}
                                    alt="Shop" width="65px"/><p>Compras</p>
                            </div>
                        </Link>
                        <Link to="/stores/Supermarket">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                                <img
                                    src={supermarket}
                                    alt="Supermarket" width="65px"/><p>Super</p>
                            </div>
                        </Link>
                        <Link to="/stores/Breakfast">
                            <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                                <img
                                    src={snacks}
                                    alt="Breakfast & Snacks" width="65px" className="mt-4"/><p>Breakfast<br/>Snacks</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* main block mobile */}
            <div className="container-fluid d-md-none main-mobile">
                <div className="container">

                    <div className="row d-flex justify-content-center align-items-center relative">
                        <Link to="/stores/Anything">
                            <div
                            className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-1">
                            <img
                                src={everything}
                                alt="Anything" width="55px"/><p>Anything</p>
                            </div>
                        </Link>
                        <div className="d-flex justify-content-center align-items-center relative">

                        <Link to="/stores/Shop">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-2">
                                <img
                                    src={shop}
                                    alt="Shop" width="55px"/><p>Shop</p>
                            </div>
                        </Link>
                        <Link to="/stores/Supermarket">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-3">
                                <img
                                    src={supermarket}
                                    alt="Supermarket" width="55px"/><p>Supermarket</p>
                            </div>

                        </Link>
                        <Link to="/stores/Breakfast">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-4">
                                <img
                                    src={snacks}
                                    alt="Breakfast & Snacks" width="55px" className="mt-3"/><p>Breakfast<br/>Snacks</p>
                            </div>
                        </Link>
                        <Link to="/stores/Courier">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-5">
                                <img
                                    src={courier}
                                    alt="Courier" width="55px"/><p>Courier</p>
                            </div>
                        </Link>
                        <Link to="/stores/Pharmacy">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-6">
                                <img
                                    src={farmacia}
                                    alt="Pharmacy" width="55px"/><p>Pharmacy</p>
                            </div>
                        </Link>
                        <Link to="/stores/Food">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-7">
                                <img
                                    src={food}
                                    alt="Food" width="55px"/><p>Food</p>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageMainBlock;
