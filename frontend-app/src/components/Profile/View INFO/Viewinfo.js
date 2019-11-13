import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import './Viewinfo.css';
import FaceIcon from '@material-ui/icons/Face';
import Fab from '@material-ui/core/Fab';


export default function SimplePopper() {

    const [name, setName] = useState("Pepito");
    const [email, setEmail] = useState("Pepito");
    const [phone_number, setPhone_number] = useState("Pepito");
    const [password, setPassword] = useState("Pepito");
    const [error, setError] = useState("");
    const [responseJson, setResponseJson] = useState("");



    useEffect(() => {
        const fetchdata = async () => {

            const url = 'http://127.0.0.1:80/api/user/3';

            const options = {
                method: 'GET',
                body: JSON.stringify(),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                }),
                mode: 'cors'
            };

            fetch(url, options)
                .then(response => {
                    console.log("El status es: " + response.status);

                    if (response.status !== 200) {
                        return Promise.reject(response.status);
                    }

                    return response.json();

                }).then(response => {
                console.log("El JSON es:\n" + response);
                setName(response.name);
                setEmail(response.email);
                setPhone_number(response.phone_number);
                setPassword(response.password);


            })


                .catch(error => {
                    setError(error);
                    alert("Algo va mal: " + error);
                })

        };

        fetchdata();
    }, []);

    const useStyles = makeStyles(theme => ({
        paper: {
            border: '1px solid',
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },

    }));


    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <div>
            <div class={"profilebutton"}>
                <button aria-describedby={id} type="button" onClick={handleClick}>

                    <div>
                        <Fab color="primary" aria-label="add" className={classes.fab}>
                            <FaceIcon/>
                        </Fab>
                    </div>
                </button>
            </div>

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className="infoprofile">
                    <div className="container_profile">
                        <div className="profile_body">
                            <div className="profile_title">PERFIL</div>
                            <div className="profile_box">
                                <div className="profile_edit">Editar</div>
                                <div className="profile_names">Nombre</div>
                                <div className="profile_request">{name}</div>


                                <div className="profile_names">E-mail</div>
                                <div className="profile_request">{email}</div>

                            </div>
                            <div className="profile_box">
                                <div className="profile_edit">Editar</div>
                                <div className="profile_names">Telefono</div>
                                <div className="profile_request">{phone_number}</div>

                            </div>
                            <div className="profile_box">
                                <div className="profile_edit">Editar</div>
                                <div className="profile_names">Contraseña</div>
                                <div className="profile_request">{password}</div>

                            </div>
                            <div className="profile_box2">
                                <div className="profile_logout">Cerrar sesion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popper>
        </div>
    );
}

