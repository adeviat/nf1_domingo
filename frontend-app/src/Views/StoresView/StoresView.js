import React, {useContext, useEffect} from "react";
import StoreInfoHeader from "../../components/StoreInfoHeader/StoreInfoHeader";
import RegisterCart from "../../components/RegisterCart/RegisterCart";
import Viewinfo from "../../components/Profile/Viewinfo";
import RegisterButton from "../../components/Buttons/RegisterButton/RegisterButton";
import LoginButton from "../../components/Buttons/LoginButton/LoginButton";
import {User} from "../../components/Helpers/userReducer";
import DomingoProductItem from "../../components/DomingoProductItem/DomingoProductItem";
import {StoreContainer} from "./Stores/Stores.container";


export default function  StoresView (props) {

    //const { state, dispatch } = useContext(User);
    const { match } = props;
    const { category } = match.params;


    return(
        <div className="StoreView">
            <div className="container-fluid d-none d-md-flex header-desktop">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span>Domingo logo</span>
                        </div>
                        <div>
                            <StoreContainer category={category}/>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    );

}

