
import React, {useContext, useEffect, useState} from 'react';
import './DialogEditUser.css';
import '../Buttons/LoginButton/LoginModalBox.css'
import '../Helpers/ServerMethods.js'
import {User} from "../Helpers/userReducer";


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
import {put} from "../Helpers/ServerMethods";




export default function DialogEditUser({setOpenEdit, user}) {

    const [submit, setSubmit] = useState(false);
    const {state, dispatch} = useContext(User);
    const [name, setName] = useState( user.name);
    const [surname, setSurname] = useState(user.surname);
    const [email, setEmail] = useState(user.email);
    const [phone_number, setPhone_number] = useState();
    const [password, setPassword] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');

   /* useEffect(()=>{
        if(state.User){
            setName(state.User.name);
            setSurname(state.User.surname);
            setEmail(state.User.email);
        }
    });*/




    useEffect(() =>{

        const data = {
            name: name,
            surname: surname,
            //phonenumber: phoneNumber,
            email: email,
            password: '',
            token: localStorage.getItem('token')

        }

        if(submit){
            put('api/user/update', data)
                .then(response =>{
                    setName(response.change.name);
                    setSurname(response.change.surname);
                    setEmail(response.change.email);
                    setOpenEdit(false);
                    return dispatch({
                        type:'UPDATE_USER',
                        payload: response
                    })
                })
        }

    },[submit]);


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
        <div>
              <form noValidate autoComplete="off">
                        <div className="field-row">
                            <div className="field-icon">
                                <PermIdentityIcon/>
                            </div>
                            <div className="field-input">
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="text">Name</InputLabel>
                                    <Input  id="text" type="text"value={name}
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
                    <div className="loginbtnbox">
                        <button onClick={() => setSubmit(true)} className="SubmitButton">
                            Submit
                        </button>
                    </div>
        </div>
    );
}

