import React, {useState} from 'react';
import './DialogEditUser.css';
import './LoginModalBox.css'



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




export default function DialogEditUser() {

    const [userName, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('@');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [current_location, setCurrent_location] = useState('Barcelona');
    const [error, setError] = useState('');

    const data = {
        username: userName,
        surname: surname,
        phonenumber: phoneNumber,
        email: email,
        password: password,
        current_location:current_location

    }

    const handleOnSubmit = () => {

        const fetchdata = async () => {
            const url = 'http://127.0.0.1:80/api/user';

            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    //'Access-Control-Allow-Headers': 'Authorization',

                }),
                mode: 'cors',
            };
            return fetch(url, options)
                .then(response => {
                    //debugger;
                    if(response.status === 201) {
                        alert(response.statusText);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).then(data => {
                    //debugger;
                    // alert("Succesful, codigo 200"); alert("Error.\n\nOptions body:\n" + options.body +"\n\nURL called:\n" + url +
                }).catch(error => {

                    setError(error);
                    alert("sdf " + error);

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
                                    <Input id="text" type="text"value={userName}
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
                                    <Input id="text" type="text"value={surname}
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
                                    <Input id="email" type="email"value={email}
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
