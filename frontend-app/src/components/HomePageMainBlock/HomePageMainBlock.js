import React from 'react';

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
                        <h1>Anything in&nbsp;<span className="select-city">Barcelona <img
                            src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/landing/dropdown.svg"
                            alt=""/></span></h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <h2 className="main-subtitle">Delivered in minutes</h2>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/mw7p9b345wc9ochmgfwz"
                                alt="Courier" width="65px"/><p>Courier</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/caydhj0ofggm5hybmdnf"
                                alt="Pharmacy" width="65px"/><p>Pharmacy</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/prj0mlcuvmymzfh8pqjz"
                                alt="Food" width="65px"/><p>Food</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/hhxw0ckf1kqpxuzo4eio"
                                alt="Anything" width="65px"/><p>Anything</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/tsrfiohkwah1zbr2vkp4"
                                alt="Shop" width="65px"/><p>Shop</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/ij5iep06ovnsekl4voic"
                                alt="Supermarket" width="65px"/><p>Supermarket</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center category-btn">
                            <img
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/cxu3eazi1ajxqckcns2n"
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
                                src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/hhxw0ckf1kqpxuzo4eio"
                                alt="Anything" width="55px"/><p>Anything</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center relative">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-2">
                                <img
                                    src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/tsrfiohkwah1zbr2vkp4"
                                    alt="Shop" width="55px"/><p>Shop</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-3">
                                <img
                                    src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/ij5iep06ovnsekl4voic"
                                    alt="Supermarket" width="55px"/><p>Supermarket</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-4">
                                <img
                                    src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/cxu3eazi1ajxqckcns2n"
                                    alt="Breakfast & Snacks" width="55px" className="mt-3"/><p>Breakfast<br/>Snacks</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-5">
                                <img
                                    src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/mw7p9b345wc9ochmgfwz"
                                    alt="Courier" width="55px"/><p>Courier</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-6">
                                <img
                                    src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/caydhj0ofggm5hybmdnf"
                                    alt="Pharmacy" width="55px"/><p>Pharmacy</p>
                            </div>
                            <div
                                className="d-flex flex-column justify-content-center align-items-center category-btn-mobile category-btn-mobile-7">
                                <img
                                    src="https://res.cloudinary.com/glovoapp/w_140,h_140,c_fit,f_auto,q_auto/StoreCategories/prj0mlcuvmymzfh8pqjz"
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