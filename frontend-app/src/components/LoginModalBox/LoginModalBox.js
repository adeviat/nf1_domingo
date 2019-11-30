import React, {useEffect, useState} from 'react';
import './LoginModalBox.css';

// REQUIRED BY MATERIAL-UI FORMS
import 'typeface-roboto';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// ICON IMPORTATION
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {post} from "../Helpers/ServerMethods";


export default function LoginModalBox({setOpenLogin}) {

    // HOOKS AND FUNCTIONS TO UPDATE PASSWORD FIELD'S VISIBILITY
    const [password, setPassword] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setPassword({...password, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setPassword({...password, showPassword: !password.showPassword});
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    // HOOKS PARA ACTUALIZAR LAS VARIABLES CUANDO ESCRIBIMOS
    const [userName, setName] = useState('');

    const data = {
        email: userName,
        password: password.password
    };

    const [submit, setSubmit] = useState(false);

    // HOOKS PARA MOSTRAR MENSAJE DE ERROR AL LOGUEARSE O NO
    const [errorLogin, setErrorLogin] = useState(false);

    // EFFECT PARA GUARDAR EL TOKEN Y CERRAR LA VENTANA
    useEffect(() => {

        setSubmit(false);
        setErrorLogin(false);

        if (submit) {
            post('api/user/login', data)
                .then(response => {
                    if (response === 200) {
                        localStorage.setItem('loginToken', response.token);
                        setOpenLogin(false);
                    }
                }).catch(err => {
                    setErrorLogin(true);
            });
        }
    }, [submit]);


    return (
        <div className="loginmodalbox">
            <div className="closebtnbox">
                <button className="closebtn">
                    <CloseOutlinedIcon/>
                </button>
            </div>
            <div className="loginmodalboxwrapper">
                <h2>Iniciar sesión en Domingo</h2>
                <form noValidate autoComplete="off">
                    <div className="field-row">
                        <div className="field-icon">
                            <MailOutlineIcon/>
                        </div>
                        <div className="field-input">
                            <FormControl fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" value={userName}
                                       onChange={e => setName(e.target.value)}/>
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
                                       type={password.showPassword ? 'text' : 'password'}
                                       value={password.password}
                                       onChange={handleChange('password')}
                                       endAdornment={
                                           <InputAdornment position="end">
                                               <IconButton
                                                   aria-label="toggle password visibility"
                                                   onClick={handleClickShowPassword}
                                                   onMouseDown={handleMouseDownPassword}
                                               >
                                                   {password.showPassword ? <Visibility/> : <VisibilityOff/>}
                                               </IconButton>
                                           </InputAdornment>
                                       }
                                />
                            </FormControl>
                        </div>
                    </div>
                </form>
                <div className="margin-10">
                    <p className="forgotpwd">
                        <a href="#">¿Has olvidado la contraseña?</a>
                    </p>
                </div>
                {errorLogin && <div className="margin-10 mt-4 errorLoginBox">
                    <p>El usuario y/o la contraseña no son correctos.</p>
                </div>
                }
                <div className="loginbtnbox">
                    <button className="loginbtn"
                            type='submit'
                            value="Sign in"
                            onClick={() => setSubmit(true)}>Iniciar sesión con e-mail
                    </button>
                </div>
                <div className="registerbtn">
                    <p>¿Eres nuevo usuario de Glovo? <a href="#">Regístrate</a></p>
                </div>
            </div>
        </div>
    );
}
