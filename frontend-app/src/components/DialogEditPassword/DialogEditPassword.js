import React, {useContext, useEffect, useState} from "react";
import {User} from "../Helpers/userReducer";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {put} from "../Helpers/ServerMethods";


export default function DialogEditPassword({setOpenEditPass}){

    const {state, dispatch} = useContext(User);
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirm] = useState('');
    const [submit, setSubmit] = useState(false);
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
    const [valuesConfirm, setValuesConfirm] = React.useState({
        password_confirmation: '',
        showPassword: false,
    });

    const handleChangeConfirm = prop => event => {
        setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
        setPasswordConfirm(event.target.value);
    };

    const handleClickShowPasswordConfirm = () => {
        setValuesConfirm({ ...valuesConfirm, showPassword: !valuesConfirm.showPassword });
    };

    const handleMouseDownPasswordConfirm = event => {
        event.preventDefault();
    };

    useEffect(() => {
        const data = {
            password: values.password,
            password_confirmation: values.password,
            token: state.token
        }
        if (submit) {
            put('api/user/updatepass', data)
                .then(response => {
                    setPassword(response.change.password);
                    setOpenEditPass(false);
                    return dispatch({
                        type: 'UPDATE_USER',
                        payload: response
                    })
                })
        }
    },[submit]);
    return (
        <div>
            <form noValidate autoComplete="off">

                <div className="field-row">
                    <div className="field-icon">
                        <LockOutlinedIcon/>
                    </div>
                    <div className="field-input">

                        <FormControl fullWidth>
                            <InputLabel htmlFor="password">Nueva Contraseña</InputLabel>
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
                        <FormControl fullWidth>
                            <InputLabel htmlFor="password_confirmation">Repetir Nueva Contraseña</InputLabel>
                            <Input fullWidth
                                   id="password_confirmation"
                                   type={valuesConfirm.showPassword ? 'text' : 'password'}
                                   value={valuesConfirm.password}
                                   onChange={handleChangeConfirm('password_confirmation')}
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={handleClickShowPasswordConfirm}
                                               onMouseDown={handleMouseDownPasswordConfirm}
                                           >
                                               {valuesConfirm.showPassword ? <Visibility /> : <VisibilityOff />}
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


};