import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import React, {useState} from "react";
import PermIdentityIcon from "@material-ui/core/SvgIcon/SvgIcon";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import  {post} from "../../Helpers/ServerMethods.js";


export default function RegisterButton() {

    const [openRegister, setOpenRegister] = React.useState(false);

    const [userName, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const data = {
        name: userName,
        surname: surname,
        email: email,
        password: password,


    }

    const handleOnSubmit = () => {

        const dataLogin = {
            email: data.email,
            password: data.password
        };
        post('api/user/register',data)
            .then(() =>{
                post('api/user/login', dataLogin)
                    .then(response => {
                        localStorage.setItem('loginToken',response.token );
                    });
            });
        handleCloseRegister();

    }


    // HOOKS AND FUNCTIONS TO UPDATE PASSWORD FIELD'S VISIBILITY
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    //Register Handle

     const handleClickOpenRegister = () =>  {
        setOpenRegister(true);
    };

    const handleCloseRegister = () => {
        setOpenRegister(false);
    };
    return(
        <div>
        <button className="register-btn-desktop" onClick={e => setOpenRegister(true)}>Register
        </button>

        <Dialog open={openRegister} onClose={handleCloseRegister} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Register to Domingo
                <img className="CloseImg" onClick={handleCloseRegister} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

            </DialogTitle>
            <DialogContent >
                <div className="DialogEditUser">

                    <form noValidate autoComplete="off">
                        <div className="field-row">
                            <div className="field-icon">
                                <PermIdentityIcon/>
                            </div>
                            <div className="field-input">
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="text">Name</InputLabel>
                                    <Input  id="text" type="text"value={userName}
                                            onChange={e => setName(e.target.value)}/>
                                </FormControl>
                            </div>
                        </div>
                        <div className="field-row">
                            <div className="field-icon">
                                <PermIdentityIcon/>
                            </div>
                            <div className="field-input">
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="text">Surame</InputLabel>
                                    <Input  id="text" type="text"value={surname}
                                            onChange={e => setSurname(e.target.value)}/>
                                </FormControl>
                            </div>
                        </div>
                        <div className="field-row">
                            <div className="field-icon">
                                <MailOutlineIcon/>
                            </div>
                            <div className="field-input">
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <Input  id="email" type="email"value={email}
                                            onChange={e => setEmail(e.target.value)}/>
                                </FormControl>
                            </div>
                        </div>
                        <div className="field-row">
                            <div className="field-icon">
                                <LockOutlinedIcon/>
                            </div>
                            <div className="field-input">
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                                    <Input fullWidth
                                           id="password"
                                           type={values.showPassword ? 'text' : 'password'}
                                           value={values.password}
                                           onChange={handleChange('password')}
                                           endAdornment={
                                               <InputAdornment position="end">
                                                   <IconButton
                                                       aria-label="toggle password visibility"
                                                       onClick={handleClickShowPassword}
                                                       onMouseDown={handleMouseDownPassword}
                                                   >
                                                       {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                   </IconButton>
                                               </InputAdornment>
                                           }
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </form>
                    <div className="SubmitButton">
                        <button onClick={handleOnSubmit} className="register-btn-desktop">
                            Submit
                        </button>
                    </div>
                </div>



            </DialogContent>
        </Dialog>
        </div>
    );
}


