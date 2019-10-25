import React from 'react';
import './RegisterCart.css'

function RegisterCart() {
    const RegistrationCartFill = {
        header: "Register Now",
        subtitle: "Then select your products!",
        text: "Already in Glovo?",
        imgsrc:"https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/astronaut.svg",
    };

    return(
      <div className="DomingoRegisterCart">
        <div className="DomingoRegisterCardHeader">
            {RegistrationCartFill.header}
        </div>
        <div className="DomingoRegisterCartSubtitle">
            {RegistrationCartFill.subtitle}
        </div>
        <div className="DomingoRegisterCartRegisterButton">
            <button className="register-btn-desktop">Register</button>
        </div>
        <div className="DomingoRegisterCartText">
            <span>{RegistrationCartFill.text}</span>
            <span className="DomingoRegisterCardTextLogin">
                <button class="search-btn-desktop">
                    Login
                </button>
            </span>
        </div>
          <div  className="DomingoRegisterCardImg" />

      </div>
    );
}
export default RegisterCart;