import React, {useState} from 'react';
import '../DialogEditUser/DialogEditUser.css';
import '../Buttons/LoginButton/LoginModalBox.css'



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
import PermIdentityIcon from '@material-ui/icons/PermIdentity';




export default function RegisterFrom() {
    const [userName, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    /* const [phoneNumber, setPhoneNumber] = useState(0);
     const [current_location, setCurrent_location] = useState('Barcelona');*/
    const [error, setError] = useState('');

    const data = {
        name: userName,
        surname: surname,
        email: email,
        password: password,
        token: localStorage.getItem('loginToken')

    }

    const handleOnSubmit = () => {

        const fetchdata = async () => {
            const url = 'http://127.0.0.1/api/user/register';

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
                    //debugger;
                    if(response.status === 200) {
                        alert(response.statusText);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).catch(error => {
                    setError(error);
                    alert(+ error);
                });
        };

        fetchdata();

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

// TODO: Actualizar form de registro: añadir campos tlf, direccion y estilos, etc..

    return (
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
    );
}
