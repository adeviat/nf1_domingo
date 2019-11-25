import React from 'react';
import './RegisterCart.css'
import RegisterButton from "../Buttons/RegisterButton/RegisterButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";


/* Aqui iniciarem el dialogue i crearem el form en un compoonent apart*/

function RegisterCart() {
    // HOOKS AND FUNCTIONS TO HANDLE DIALOG EVENT
    const [open, setOpen] = React.useState(false);



    const handleClickOpen = () =>  {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




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

                <RegisterButton/>

            </div>

            <div className="DomingoRegisterCartText">
                <span>{RegistrationCartFill.text}</span>
                <span className="DomingoRegisterCardTextLogin">
                    <LoginButton/>
            </span>
            </div>
            <div  className="DomingoRegisterCardImg" />

        </div>
    );
}
export default RegisterCart;