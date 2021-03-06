import React, {useState, useEffect, useContext, useReducer, createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import './CartContainer.css'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


const initialCartState = {

    isSubmiting: false,
    lastFetchDate: undefined,
    cartCollection: [],
    cartSubmited: false,
    cartProductsIds: [],

};

export const cartContext =  createContext();

function reducer(state = initialCartState, action) {
    switch (action.type) {
        case 'CART_SUBMIT':
            return { ...state, isSubmiting: true};
        case 'ADD_PRODUCT':
            return { ...state, cartCollection: [...state.cartCollection, action.product], cartProductsIds: [...state.cartProductsIds, action.product.id]};
        case 'DELETE_PRODUCT':
            return { ...state, cartCollection: [...state.cartCollection.pop(action.product)] };
        case 'DELETE_CART':
            return { ...state, cartCollection: [],isSubmiting : false, cartSubmited : true };
        default:
            return state;
    }
}

export function CartProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialCartState);
    const value = { state, dispatch };
    return (
        <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    );
}

export default function CartContainer() {

    const {state, dispatch} = useContext(cartContext);
    const classes = useStyles();

    return (


        <CartProvider>
            <div>
                {state.cartCollection.map(product =>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={product.photo} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.name }
                            secondary={
                                <React.Fragment alignItems="space-around">
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        &nbsp; Precio = {product.price} €
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                </List>)}

            </div>
        </CartProvider>
    );
}
