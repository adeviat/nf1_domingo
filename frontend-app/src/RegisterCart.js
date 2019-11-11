import React from 'react';
import './RegisterCart.css'
import {withRouter} from "react-router-dom";
import DialogEditUser from './DialogEditUser.js';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
            <button className="register-btn-desktop" onClick={handleClickOpen} >

                Register</button>

        </div>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">
                  Edit User
                  <img className="CloseImg" onClick={handleClose} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

              </DialogTitle>
              <DialogContent >
                  <DialogContentText>

                  </DialogContentText >
                  <DialogEditUser/>
              </DialogContent>
              <DialogActions>


              </DialogActions>
          </Dialog>
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