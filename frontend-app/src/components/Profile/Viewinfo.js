import React, {useState, useEffect, useContext} from 'react';
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
import 'typeface-roboto';
import {User} from "../Helpers/userReducer";


// ICON IMPORTATION

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DialogEditPassword from "../DialogEditPassword/DialogEditPassword";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {green} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles";
import Cartp from "../Cart/Cartp";



export default function SimplePopper() {

    //const user = JSON.parse(localStorage.getItem('user'));
    const {state, dispatch} = useContext(User);

    const [name, setName] = useState( '');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState();
    const [password, setPassword] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');

    const [responseJson, setResponseJson] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openEdit, setOpenEdit] = React.useState(false)
    const [openEditPass, setOpenEditPass] = React.useState(false);


    useEffect(() => {
        if(state.User){
            setName(state.User.name);
            setSurname(state.User.surname);
            setEmail(state.User.email);
            //setCurrentLocation()

        }
    });

    const user = {
        name: name,
        surname: surname,
        email: email
    }

    const handleClickOpenEdit = () =>  {
        setOpenEdit(true);
    };
    const handleClickOpenEditPass = () =>  {
        setOpenEditPass(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    const handleCloseEditPass = () => {
        setOpenEditPass(false);
    };

    const handleLogOut = () =>{
        dispatch({
            type: 'LOG_OUT',
            payload: ''

        })
    }

    //TODO: Realizar un POST con el token para recoger el usuario
    // para luego mostrar los datos de usuario




    ////TODO Ajustar el estilo del boton
    const useStyles = makeStyles(theme => ({
        paper: {
            border: '1px solid',
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            margin: theme.spacing(1),
            backgroundColor: '#00659c',
            border:'none',
            cursor: 'pointer',
            color: 'white',
            textAlign: 'right',
            fontWeight: '600'



        },
        extendedIcon: {
            marginLeft: theme.spacing(1),
        },

    }));
    const theme = createMuiTheme({
        palette: {
            secondary: {
                main:'#f7c143'
            }
        },
    });



    const classes = useStyles();


    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <div>
            <div className={classes.fab}>
                <div aria-describedby={id}  onClick={handleClick} >
                    <div className="col d-flex justify-content-end">
                        <div>
                            <div> {name} {surname}</div>
                            <div> {email}</div>
                        </div>
                        <div className={classes.extendedIcon} >
                            <ThemeProvider theme={theme}>
                                <Fab color={'secondary'} aria-label="add" >
                                    <FaceIcon style={{ color: "primary" }}/>
                                </Fab>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className="infoprofile">
                    <div className="container_profile">
                        <div className="profile_body">
                            <div className="profile_title">PERFIL</div>
                            <div className="profile_box">
                                <div className="profile_edit"  onClick={handleClickOpenEdit}>Editar</div>
                                <div className="profile_names">Nombre</div>
                                <div className="profile_request">{name} {surname}</div>


                                <div className="profile_names">E-mail</div>
                                <div className="profile_request">{email}</div>

                            </div>
                            <div className="profile_box">

                                <div className="profile_names">Telefono</div>
                                <div className="profile_request">{phone_number}</div>

                            </div>
                            <div className="profile_box">
                                <div className="profile_edit"  onClick={handleClickOpenEditPass}>Editar</div>
                                <div className="profile_names">Contraseña</div>
                                <div className="profile_request" >{password}</div>

                            </div>
                            <div className="profile_box">

                                <div className="profile_names">Dirección</div>
                                <div className="profile_request">{currentLocation}</div>

                            </div>
                            <div className="profile_box2">
                                <div className="profile_logout" onClick={handleLogOut}>Cerrar sesion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popper>

            {/* Edit  Dialog */}
            <Dialog open={openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Edit User
                    <div className="closebtnbox">
                        <button className="closebtn" onClick={handleCloseEdit}>
                            <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>
                        </button>
                    </div>

                </DialogTitle>
                    <DialogContent >
                        <DialogEditUser setOpenEdit={setOpenEdit} user={user}/>

                    </DialogContent>
            </Dialog>
            {/* Edit Pass Dialog */}
            <Dialog open={openEditPass} onClose={handleCloseEditPass} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Edit User
                    <div className="closebtnbox">
                        <button className="closebtn" onClick={handleCloseEditPass}>
                            <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>
                        </button>
                    </div>

                </DialogTitle>
                <DialogContent >
                    <DialogEditPassword setOpenEditPass={setOpenEditPass} />

                </DialogContent>
            </Dialog>
        </div>
    );
}

