import React, {useEffect, useState} from 'react';


// REQUIRED BY MATERIAL-UI FORMS
import 'typeface-roboto';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LoginModalBox from "../../LoginModalBox/LoginModalBox";


export default function LoginButton() {

    const [openLogin, setOpenLogin] = React.useState(false);


    return (
        <div>
            <div>
                <button className="login-btn-desktop" onClick={() => setOpenLogin(true)}>Login</button>
            </div>
            <Dialog open={openLogin} onClose={e => setOpenLogin(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Login User
                    <img className="CloseImg" onClick={() => setOpenLogin(false)} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

                </DialogTitle>
                    <DialogContent >

                        <LoginModalBox setOpenLogin={setOpenLogin}/>

                    </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>
        </div>
    );
}