import React from 'react';

function HomePageTopmenu() {
    return (
        <div>
            {/* header desktop */}
            <div class="container-fluid d-none d-md-flex header-desktop">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <button class="search-btn-desktop"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search.svg"
                                alt="Lupa"/>What do you need?</button>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <button class="register-btn-desktop">Register</button>
                            <button class="login-btn-desktop">Login</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* header mobile */}
            <div class="container-fluid d-flex d-md-none header-mobile">
                <div class="container">
                    <div class="row">
                        <div class="col-2 d-flex align-items-center">
                            <button class="login-btn-mobile"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/menu.svg"
                                alt="Login"/></button>
                        </div>
                        <div class="col-8 d-flex justify-content-center align-items-center">
                            <button class="city-selector-mobile">Barcelona <img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/landing/dropdown.svg"
                                alt="Escoger ciudad" width="14px"/></button>
                        </div>
                        <div class="col-2 d-flex justify-content-end align-items-center">
                            <button class="search-btn-mobile"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search_mint.svg"
                                alt="Buscar" width="22px"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageTopmenu;