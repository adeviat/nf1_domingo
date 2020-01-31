import React from 'react';
import logo from '../Img/logo.png';
import courier from '../Img/courier.png';
import farmacia from '../Img/farmacia.png';
import everything from '../Img/everything.png';
import food from '../Img/food.png';
import shop from '../Img/shop.png';
import supermarket from '../Img/supermarket.png';
import snacks from '../Img/snacks.png';
import expand from '../Img/expand.png';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




function HomePageMainBlock() {
    return (
        <div>
            {/* main block desktop*/}
            <div className="container-fluid d-none d-md-flex main-desktop">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <img
                            src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/logo_green.svg"
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
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={courier}
                                alt="Courier" width="65px"/><p>Paquetes</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={farmacia}
                                alt="Pharmacy" width="65px"/><p>Farmacia</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={food}
                                alt="Food" width="65px"/><p>Comida</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={everything}
                                alt="Anything" width="65px"/><p>Anything</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={shop}
                                alt="Shop" width="65px"/><p>Compras</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={supermarket}
                                alt="Supermarket" width="65px"/><p>Super</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src={snacks}
                                alt="Breakfast & Snacks" width="65px" className="mt-4"/><p>Breakfast<br/>Snacks</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* main block mobile */}
            <div className="container-fluid d-md-none main-mobile">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center relative">
                        <div
                            className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-1">
                            <img
                                src={everything}
                                alt="Anything" width="55px"/><p>Anything</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center relative">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-2">
                                <img
                                    src={shop}
                                    alt="Shop" width="55px"/><p>Shop</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-3">
                                <img
                                    src={supermarket}
                                    alt="Supermarket" width="55px"/><p>Supermarket</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-4">
                                <img
                                    src={snacks}
                                    alt="Breakfast & Snacks" width="55px" className="mt-3"/><p>Breakfast<br/>Snacks</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-5">
                                <img
                                    src={courier}
                                    alt="Courier" width="55px"/><p>Courier</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-6">
                                <img
                                    src={farmacia}
                                    alt="Pharmacy" width="55px"/><p>Pharmacy</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-7">
                                <img
                                    src={food}
                                    alt="Food" width="55px"/><p>Food</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageMainBlock;