import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {ReactComponent as CartEmpty} from '../../Views/HomePage/HomePageMainBlock/Img/Iconos/cart-empty.svg';

import "./Cartp.css";


export default function Cartp() {

    const [cartOpen, setCartOpen] = useState(true);
    const widthCartContent = cartOpen ? 400 : 0;

    const openCart = () => {
        setCartOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeCart = () => {
        setCartOpen(false);
        document.body.style.overflow = "scroll";
    }

    return(
        <div>
            <Button variant="link" className="cart">
                <CartEmpty onClick={openCart}/>
            </Button>
            <div className="cart-content" style={{width: widthCartContent}}>Todos mis productos</div>
        </div>
    )




}