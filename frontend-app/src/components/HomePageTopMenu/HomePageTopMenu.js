import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import DialogEditUser from "../DialogEditUser/DialogEditUser.js";
import LoginModalBox from "../LoginModalBox/LoginModalBox.js";

function HomePageTopmenu() {
    // HOOKS AND FUNCTIONS TO HANDLE DIALOG EVENT
    const [openRegister, setOpenRegister] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);


    //Register Handle

    const handleClickOpenRegister = () =>  {
        setOpenRegister(true);
    };

    const handleCloseRegister = () => {
        setOpenRegister(false);
    };


    // LogIn Handle

    const handleClickOpenLogin = () =>  {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    return (
        <div>
            {/* header desktop */}
            <div class="container-fluid d-none d-md-flex header-desktop">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <button class="search-btn-desktop"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search.svg"
                                alt="Lupa"/>What do you need?</button>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <button class="register-btn-desktop" onClick={handleClickOpenRegister}>Register</button>
                            <button class="login-btn-desktop" onClick={handleClickOpenLogin}>Login</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* header mobile */}
            <div class="container-fluid d-flex d-md-none header-mobile">
                <div class="container">
                    <div class="row">
                        <div class="col-2 d-flex align-items-center">
                            <button class="login-btn-mobile"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/menu.svg"
                                alt="Login"/></button>
                        </div>
                        <div class="col-8 d-flex justify-content-center align-items-center">
                            <button class="city-selector-mobile">Barcelona <img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/landing/dropdown.svg"
                                alt="Escoger ciudad" width="14px"/></button>
                        </div>
                        <div class="col-2 d-flex justify-content-end align-items-center">
                            <button class="search-btn-mobile"><img
                                src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/search_mint.svg"
                                alt="Buscar" width="22px"/></button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Regisater Dialog*/}

            <Dialog open={openRegister} onClose={handleCloseRegister} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Edit User
                    <img className="CloseImg" onClick={handleCloseRegister} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

                </DialogTitle>
                <DialogContent >
                    <DialogContentText>

                    </DialogContentText >
                    <DialogEditUser/>
                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>

            {/*LogIn Dialog*/}

            <Dialog open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Login User
                    <img className="CloseImg" onClick={handleCloseLogin} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

                </DialogTitle>
                <DialogContent >
                    <DialogContentText>

                    </DialogContentText >

                    <LoginModalBox/>
                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>

        </div>
    );
}

export default HomePageTopmenu;