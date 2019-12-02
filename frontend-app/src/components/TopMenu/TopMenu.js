import React from 'react';
import './TopMenu.css';
import '../HomePage/bootstrap.min.css';

export default function TopMenu() {
    return (
        <div>
            <div className="container d-none d-sm-block">
                <div className="row top-menu-desktop">
                    <div className="col-6 d-flex align-items-center">
                        <a href="#"><img
                            src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/logo_auth.svg"
                            alt="Logo de Glovo" className="logo-img"/></a>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button className="d-flex align-items-center location-btn">
                            <div>
                                <img
                                    src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/street_bold.svg"
                                    alt="Localización"/>
                            </div>
                            <div className="location-btn-text">
                                <div>Carrer de Balmes, 147</div>
                                <div><span className="yellow">No details</span></div>
                            </div>
                        </button>
                        <button className="login-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/profile_bold.svg"
                                alt="Login"/>
                        </button>
                        <button className="orders-btn">
                            <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/orders_bold.svg"
                                 alt="Pedidos"/>
                        </button>
                    </div>
                </div>
            </div>
            < div
                className="container-fluid d-sm-none">
                <div
                    className="row top-menu-mobile">
                    < div
                        className="col-3 d-flex align-items-center">
                        <img
                            src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/menu.svg"
                            alt="Orders"
                            className="orders-img-mobile" />
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/logo_auth.svg"
                             alt="Glovo logo" className="logo-img-mobile"/>
                    </div>
                    <div className="col-3 d-flex justify-content-end align-items-center">
                        <img
                            src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search_mint.svg"
                            alt="Buscar"
                            className="search-img-mobile"/>
                    </div>
                </div>
            </div>


        </div>


    );
}

