import React, {useContext, useEffect, useState} from "react";
import '../LoginButton/LoginModalBox.css';

//MATERIAL-UI DIALOG IMPORTS
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

//MATERIAL UI FORM IMPORTS
import 'typeface-roboto';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

//MATERIAL UI ICON IMPORTS
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

//HELPERS IMPORTS
import  {post} from "../../Helpers/ServerMethods.js";
import {User} from "../../Helpers/userReducer";


export default function RegisterButton() {

    const [openRegister, setOpenRegister] = React.useState(false);

    // HOOK PARA MOSTRAR ERROR EN EL REGISTRO

    const [error ,setError] = useState('');

    const [submit, setSubmit] = useState(false);

    const [userName, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, dispatch} = useContext(User);

    const data = {
        name: userName,
        surname: surname,
        email: email,
        password: password,


    }

    useEffect( () => {

        //setError(false);
        setSubmit(false);

        if(submit){
            const dataLogin = {
                email: data.email,
                password: data.password
            };
            post('api/user/register',data)
                .then(() =>{
                    post('api/user/login', dataLogin)
                        .then(response => {

                            //localStorage.setItem('token',response.token );
                            setOpenRegister(false);
                            return dispatch({
                                type: 'SET_USER',
                                payload: response
                            });
                        })
                }).catch(error =>{
                    setError(error);
            });
        }


    },[submit])


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

        <Dialog open={openRegister} onClose={()=>setOpenRegister(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Register to Domingo
                <div className="closebtnbox">
                    <button className="closebtn" onClick={() => setOpenRegister(false)}>
                        <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>
                    </button>
                </div>

            </DialogTitle>
            <DialogContent >
                <div className="DialogEditUser">
                    <div className="loginmodalboxwrapper  align-items-center mt-n10">
                        <form noValidate autoComplete="off" >
                            <div className="field-row  ">
                                <div className="field-icon ">
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
                        {error && <div className="margin-10 mt-4 errorLoginBox"> <p> Error al registrar </p></div> }
                        <div>
                            <div className="loginbtnbox">
                                <button onClick={() => setSubmit(true)} className="SubmitButton">
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
                </DialogContent>
            </Dialog>

        </div>
    );
}


