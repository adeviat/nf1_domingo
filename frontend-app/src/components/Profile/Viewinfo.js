import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import './Viewinfo.css';
import FaceIcon from '@material-ui/icons/Face';
import Fab from '@material-ui/core/Fab';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogEditUser from "../DialogEditUser/DialogEditUser";
import DialogActions from "@material-ui/core/DialogActions";


export default function SimplePopper() {

    //const user = JSON.parse(localStorage.getItem('user'));


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState();
    const [password, setPassword] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [error, setError] = useState("");
    const [responseJson, setResponseJson] = useState("");

    const [openEdit, setOpenEdit] = React.useState(false);


    const handleClickOpenEdit = () =>  {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    //TODO: Realizar un POST con el token para recoger el usuario
    // para luego mostrar los datos de usuario

 /*   useEffect(() => {
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
    }, []);*/
    ////TODO Ajustar el estilo del boton
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
                                <div className="profile_edit"  onClick={handleClickOpenEdit}>Editar</div>
                                <div className="profile_names">Nombre</div>
                                <div className="profile_request">{name}</div>


                                <div className="profile_names">E-mail</div>
                                <div className="profile_request">{email}</div>

                            </div>
                            <div className="profile_box">

                                <div className="profile_names">Telefono</div>
                                <div className="profile_request">{phone_number}</div>

                            </div>
                            <div className="profile_box">

                                <div className="profile_names">Contraseña</div>
                                <div className="profile_request">{password}</div>

                            </div>
                            <div className="profile_box">

                                <div className="profile_names">Ciudad</div>
                                <div className="profile_request">{currentLocation}</div>

                            </div>
                            <div className="profile_box2">
                                <div className="profile_logout">Cerrar sesion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popper>

            {/* Edit  Dialog */}
            <Dialog open={openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Edit User
                    <img className="CloseImg" onClick={handleCloseEdit} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

                </DialogTitle>
                    <DialogContent >

                        <DialogEditUser/>

                    </DialogContent>
            </Dialog>
        </div>
    );
}

