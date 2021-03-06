import React, {useState, useEffect, useContext, useReducer, createContext} from 'react';
import {makeStyles , useTheme} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import  Alert from '@material-ui/lab/Alert';
import  AlertTitle from '@material-ui/lab/AlertTitle';
import './Cart.css';
import CartContainer, {cartContext} from "../CartContainer/CartContainer";


import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';


// ICON IMPORTATION
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import { User } from '../Helpers/userReducer';
import { post } from '../Helpers/ServerMethods';



export default function SimplePopper() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const {state, dispatch} = useContext(cartContext);
    const {state: userState, dipatch: userDispatch} = useContext(User);

    const handlePayButton = () => {




        const data = {
            user_id: userState.User.id,
            store_id : state.cartCollection[0].store_id,
            productList : state.cartProductsIds
        }

        post('/api/order/storeOrder',data)
        .then(response => {
            dispatch({
                type : 'DELETE_CART',
                payload : ''
            })
        })

    }


    ////TODO Ajustar el estilo del boton

    const useStyles = makeStyles(theme => ({


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
                            <div className={classes.extendedIcon} >
                                <ThemeProvider theme={theme}>
                                    <Fab color={'secondary'} aria-label="add" >
                                        <ShoppingCartIcon style={{ color: "primary" }}/>
                                    </Fab>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>

                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <div className="infocart">
                        <div className="container_cart">
                            <div className="cart_body">
                                <div className="cart_title">CARRITO</div>
                            </div>
                            <div>
                                <CartContainer/>
                            </div>

                            <div>
                                <Button variant="outlined" color="primary" onClick={() => handlePayButton()}>
                                    Pagar

                                </Button>

                            </div>
                        </div>
                    </div>
                </Popper>

            </div>

    );
}

