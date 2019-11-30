import React, {useEffect, useState} from 'react';
import LoginButton from "../Buttons/LoginButton/LoginButton.js";
import Viewinfo from "../Profile/Viewinfo.js";
import RegisterButton from "../Buttons/RegisterButton/RegisterButton.js";


function HomePageTopmenu() {
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [])

    return (
        <div>
            {/* header desktop */}
            <div className="container-fluid d-none d-md-flex header-desktop">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button className="search-btn-desktop"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search.svg"
                                alt="Lupa"/>What do you need?
                            </button>
                        </div>
                        {/* TODO Modificar boton del componente ViewInfo para que sea un div con una imagen dentro "cursor:pointer"*/}
                        <div className="col d-flex justify-content-end">
                            {visibility ? (<Viewinfo/>) :
                                (<div>
                                    <RegisterButton/>
                                    <LoginButton/>
                                </div>)
                            }
                            <Viewinfo/>
                        </div>
                    </div>

                </div>
            </div>

            {/* header mobile */}
            <div className="container-fluid d-flex d-md-none header-mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-2 d-flex align-items-center">
                            <button className="login-btn-mobile"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/menu.svg"
                                alt="Login"/></button>
                        </div>
                        <div className="col-8 d-flex justify-content-center align-items-center">
                            <button className="city-selector-mobile">Barcelona <img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/landing/dropdown.svg"
                                alt="Escoger ciudad" width="14px"/></button>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <button className="search-btn-mobile"><img
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