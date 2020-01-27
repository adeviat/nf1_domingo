import React, {useContext} from "react";
import StoreInfoHeader from "../StoreInfoHeader/StoreInfoHeader";
import RegisterCart from "../RegisterCart/RegisterCart";
import Viewinfo from "../Profile/Viewinfo";
import RegisterButton from "../Buttons/RegisterButton/RegisterButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import {User} from "../Helpers/userReducer";


export default function  StoreView () {

    const { state, dispatch } = useContext(User);

    return(
        <div className="StoreView">
            <div className="container-fluid d-none d-md-flex header-desktop">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span>Domingo logo</span>
                        </div>


                    </div>

                </div>
            </div>

        </div>

    );

}

