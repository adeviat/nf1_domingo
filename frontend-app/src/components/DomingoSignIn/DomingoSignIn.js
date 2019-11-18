import React, { useState ,useEffect} from 'react';
import './DomingoSignIn.css'


const DomingoSignIn = () => {

    const [userName, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('@');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [current_location, setCurrent_location] = useState('');
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState('');

    const data = {
        username: userName,
        surname: surname,
        phonenumber: phoneNumber,
        email: email,
        password: password,
        current_location:current_location

    }



    useEffect(() => {
        debugger;
    }, [error]);

    useEffect(() => {
        setSubmit(false);
        const fetchdata = async () => {
            const url = 'http://127.0.0.1/api/user';

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
                    if(response.status === 200) {
                        alert(response.body);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).then(data => {
                    debugger;
                    // alert("Succesful, codigo 200"); alert("Error.\n\nOptions body:\n" + options.body +"\n\nURL called:\n" + url +
                }).catch(error => {
                    debugger;
                    setError(error);
                    alert("sdf " + error);
                    debugger;
                });
        };
        if (submit) {
            fetchdata();
        }
    }, [submit]);



   /* const handleSubmit = () => {

        const fetchdata = async () => {
            debugger;
            const url = 'http://127.0.0.1/api/user';
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
            //const data = new FormData(event.target);

            debugger;
            return fetch(url, options)
                .then(response => {
                    debugger;
                    if(response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).then(data => {
                    debugger;
                }).catch(error => {
                    debugger;
                });

            //alert("response:" +"You are submitting: " + this.state.username +"\n" + this.state.surname+"\n" +this.state.phonenumber+"\n" +this.state.email+"\n" +this.state.password+"\n" +this.state.current_location);


        };
        fetchdata();
    }*/

        return (
                <div className= "DomingoSignIn">
                    <div className="DomingoSignInHeader">
                    </div>
                    <div className="DomingoSignInBodyRegisterFormDiv">
                        <form className="DomingoSignInBodyRegisterForm" >
                            <h1 className="DomingoSignInBodyRegisterFormHeader">Register to Domingo </h1>
                                <div className="DomingoSignInBodyRegisterFormŃameField">
                                    <p className="DomingoSignInBodyRegisterFormNameInputTxt">Name: </p>
                                    <input
                                        className="DomingoSignInBodyRegisterFormNameInput"
                                         type='text'
                                         value={userName}
                                         onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className="DomingoSignInBodyRegisterFormŃameField">
                                    <p className="DomingoSignInBodyRegisterFormNameInputTxt">Surname:</p>
                                    <input
                                        className="DomingoSignInBodyRegisterFormNameInput"
                                        type='text'
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                    />
                                </div>
                                <div className="DomingoSignInBodyRegisterFormŃameField">
                                    <p className="DomingoSignInBodyRegisterFormNameInputTxt">Email:</p>
                                    <input
                                        className="DomingoSignInBodyRegisterFormNameInput"
                                        type='text'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="DomingoSignInBodyRegisterFormŃameField">
                                    <p className="DomingoSignInBodyRegisterFormNameInputTxt">Phone:</p>
                                    <input
                                        className="DomingoSignInBodyRegisterFormNameInput"
                                        type='text'
                                        value={phoneNumber}
                                        onChange={e => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className="DomingoSignInBodyRegisterFormŃameField">
                                    <p className="DomingoSignInBodyRegisterFormNameInputTxt">Password:</p>
                                    <input
                                        className="DomingoSignInBodyRegisterFormNameInput"
                                        type='password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="DomingoSignInBodyRegisterFormŃameField">
                                    <p className="DomingoSignInBodyRegisterFormNameInputTxt">Current location:</p>
                                    <input
                                        className="DomingoSignInBodyRegisterFormNameInput"
                                        type='text'
                                        value={current_location}
                                        onChange={e => setCurrent_location(e.target.value)}
                                    />
                                </div>
                            <div className="DomingoSignInBodyRegisterFormSubmitButtonDiv">
                                <input
                                    className="DomingoSignInBodyRegisterFormSubmitButton"
                                    type='submit'
                                    value="Sign in"
                                    onClick={() => setSubmit(true)}
                                />
                            </div>
                        </form>

                     </div>
                </div>


            );

}



//ReactDOM.render(<DomingoSignIn />, document.getElementById('root'));
export default DomingoSignIn;