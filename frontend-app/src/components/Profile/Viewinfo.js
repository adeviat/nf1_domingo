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
import DialogActions from "@material-ui/core/DialogActions";
import {get,put} from "../Helpers/ServerMethods";
import {User} from "../Helpers/userReducer";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

// ICON IMPORTATION
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


export default function SimplePopper() {

    //const user = JSON.parse(localStorage.getItem('user'));
    const {state, dispatch} = useContext(User);

    const [name, setName] = useState( state.User.name);
    const [surname, setSurname] = useState(state.User.surname);
    const [email, setEmail] = useState(state.User.email);
    const [phone_number, setPhone_number] = useState();
    const [password, setPassword] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');

    const [responseJson, setResponseJson] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openEdit, setOpenEdit] = React.useState(false);

    //HOOK PARA RECOGER EL USUARIO



    const user = {
        name: name,
        surname: surname,
        //phonenumber: phoneNumber,
        email: email,
        password: password,
        token: localStorage.getItem('loginToken')

    }


    const handleClickOpenEdit = () =>  {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };


    const handleLogOut = () =>{
        dispatch({
            type: 'LOG_OUT',
            payload: ''

        })
    }

    //TODO: Realizar un POST con el token para recoger el usuario
    // para luego mostrar los datos de usuario

/*    useEffect(() => {

        if(anchorEl){
                    setName (state.User.name );
                    setSurname(state.User.surname);
                    setEmail(state.User.email);



        }
    }, [anchorEl]);*/



    ////TODO Ajustar el estilo del boton
    const useStyles = makeStyles(theme => ({
        paper: {
            border: '1px solid',
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            margin: theme.spacing(1),
            backgroundColor: '#ffc244',
            border:'none',
            cursor: 'pointer',
            color: 'white'

        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },

    }));


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
                    <div> {state.User.name} {state.User.surname}</div>
                    <div> {state.User.email}</div>
                    <div>
                        <Fab color="primary" aria-label="add" >
                            <PermIdentityIcon/>
                        </Fab>
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
                                <div className="profile_request">{name} {state.User.surname}</div>


                                <div className="profile_names">E-mail</div>
                                <div className="profile_request">{state.User.email}</div>

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
                    <img className="CloseImg" onClick={handleCloseEdit} src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>

                </DialogTitle>
                    <DialogContent >
                        <DialogEditUser setEmail={setEmail} setName={setName} setPassword={setPassword} setOpenEdit={setOpenEdit} setSurname={setSurname} user={user} />

                    </DialogContent>
            </Dialog>
        </div>
    );
}

