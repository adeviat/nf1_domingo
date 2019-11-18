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

export default function LoginModalBox() {

    // HOOKS AND FUNCTIONS TO UPDATE PASSWORD FIELD'S VISIBILITY
    const [password, setPassword] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setPassword({ ...password, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    // HOOKS PARA ACTUALIZAR LAS VARIABLES CUANDO ESCRIBIMOS
    const [userName, setName] = useState('');

    const data = {
        name: userName,
        password: password.password
    };

    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {

        setSubmit(false);
        const fetchdata = async () => {

            const url = 'http://127.0.0.1/api/user/login';
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Headers': 'Authorization'
                }),
                mode: 'cors',
            };

            return fetch(url, options)
                .then(response => {
                    debugger;
                    if(response.status === 200) {
                        alert(response.body);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).then(data => {
                    debugger;
                    // alert("Succesful, codigo 200"); alert("Error.\n\nOptions body:\n" + options.body +"\n\nURL called:\n" + url +
                }).catch(error => {
                    setError(error);
                    alert("Error.\n\nError type:" + error  );
                });
        };

        if (submit) {

            fetchdata();
        }
    }, [submit]);

    const handleSubmit = () => {

        const fetchdata = async () => {

            const url = 'http://127.0.0.1/api/user/login';
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                }),
                mode: 'cors',
            };

            return fetch(url, options)
                .then(response => {
                    debugger;
                    setSubmit(false);
                    if(response.status === 200) {
                        alert(response.statusText);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).then(data => {
                    // alert("Succesful, codigo 200");
                }).catch(error => {
                    setError(error);
                    alert("Error.\n\nOptions body:\n" + options.body +"\n\nURL called:\n" + url + "sdf " + error);
                });
        };

        fetchdata();
    }

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
                                <Input id="email" type="email" value={userName} onChange={e => setName(e.target.value)}/>
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
                                                   {password.showPassword ? <Visibility /> : <VisibilityOff />}
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
                <div className="loginbtnbox">
                    <button className="loginbtn"
                            type='submit'
                            value="Sign in"
                            onClick={() => setSubmit(true)}>Iniciar sesión con e-mail</button>
                </div>
                <div className="registerbtn" >
                    <p>¿Eres nuevo usuario de Glovo? <a href="#">Regístrate</a></p>
                </div>
            </div>
        </div>
    );
}