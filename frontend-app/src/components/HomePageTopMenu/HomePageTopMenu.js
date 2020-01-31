import React, {useContext, useEffect, useState} from 'react';
import LoginButton from "../Buttons/LoginButton/LoginButton.js";
import Viewinfo from "../Profile/Viewinfo.js";
import RegisterButton from "../Buttons/RegisterButton/RegisterButton.js";
import Cartp from "../Cart/Cartp";
import UserCart from "../UserCart";
import {User} from "../Helpers/userReducer";
import {get} from "../Helpers/ServerMethods";

import  expand from "../../Views/HomePage/HomePageMainBlock/Img/expand.png";



function HomePageTopmenu() {

    const [visibility,setVisibility] = useState(false);

    const { state, dispatch } = useContext(User);

    useEffect(() => {

        if (localStorage.getItem('token')) {
            get('/api/users/' + state.token)
                .then(response => {

                    return dispatch({
                        type: 'SET_USER',
                        payload: response
                    });
                });
        }
    },[]);


    useEffect(() => {

        if(state.token ){
            setVisibility(true);
        }
        else{
            setVisibility(false);
        }
    },[state]);

    return (
        <div>
            {/* header desktop */}
            <div className="container-fluid d-none d-md-flex header-desktop">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button className="search-btn-desktop"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search.svg"
                                alt="Lupa"/>What do you need?</button>
                        </div>
                        {/* TODO Modificar boton del componente ViewInfo para que sea un div con una imagen dentro "cursor:pointer"*/}

                        {visibility ? (<UserCart/>) :
                                (<div className="col d-flex justify-content-end">
                                <RegisterButton/>
                                <LoginButton/>
                            </div>)}
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
                                src={expand}
                                alt="Escoger ciudad" width="40px"/></button>
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