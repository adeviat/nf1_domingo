import React, {useContext, useEffect, useState} from "react";
import {put} from "./Helpers/ServerMethods";
import {User} from "./Helpers/userReducer";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';





export default function AddressModal({setOpenAddressModal}) {

    const {state,dispatch} = useContext(User);
    const [address, setAddress] = useState("");
    const [postcode, setPostCode] = useState("");
    const [submit, setSubmit] = useState(false);


    useEffect(() => {
        const data = {
            address: address,
            postcode: postcode,
            token: state.token
        }
        if(submit){
            put('api/user/updateAddress', data)
                .then(response =>{
                    setOpenAddressModal(false);
                    return dispatch({
                        type:'SET_USER',
                        payload: response
                    })
                })
        }

    },[submit]);
    return (

                <div className="AddressModal">
                        <form noValidate autoComplete="off">
                            <div className="field-row  ">
                                <div className="field-icon ">
                                    <HomeOutlinedIcon/>
                                </div>
                                <div className="field-input">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="text">Address</InputLabel>
                                        <Input id="text" type="text" value={address}
                                               onChange={e => setAddress(e.target.value)}/>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="field-row  ">
                                <div className="field-icon ">
                                    <HomeOutlinedIcon/>
                                </div>
                                <div className="field-input">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="text">Postal code</InputLabel>
                                        <Input id="text" type="text" value={postcode}
                                               onChange={e => setPostCode(e.target.value)}/>
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