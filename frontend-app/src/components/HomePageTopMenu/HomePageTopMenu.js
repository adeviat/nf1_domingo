import React, {useEffect, useState} from 'react';
import LoginButton from "../Buttons/LoginButton/LoginButton.js";
import Viewinfo from "../Profile/Viewinfo.js";
import RegisterButton from "../Buttons/RegisterButton/RegisterButton.js";


function HomePageTopmenu() {
    const [visibility,setVisibility] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('token')){
            setVisibility(true);
        }
        else{
            setVisibility(false);
        }
    }, [])

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
                        {/* TODO Modificar boton del componente ViewInfo para que sea un div con una imagen dentro "cursor:pointer"*/}
                        <div class="col d-flex justify-content-end">
                           /* {visibility ? (<Viewinfo/>) :
                                (<div>
                                <RegisterButton/>
                                <LoginButton/>
                            </div>)}*/
                            <Viewinfo/>
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