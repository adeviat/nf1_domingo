import React from "react";
import Viewinfo from "./Profile/Viewinfo";
import Cart from "./Cart/Cart";


function userCart() {
    return(
        <div >
            <Viewinfo/>
            <Cart styles={{display:'flex'}}/>
        </div>
    );
}

export default userCart;

