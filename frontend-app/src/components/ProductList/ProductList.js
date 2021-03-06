import React, {useContext, useEffect, useReducer, useState} from 'react';
import './ProductList.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RegisterCart from "../RegisterCart/RegisterCart";
import HomePageTopmenu from "../HomePageTopMenu/HomePageTopMenu";
import StoreInfoHeader from "../StoreInfoHeader/StoreInfoHeader";
import {CartProvider, cartContext} from "../CartContainer/CartContainer";
import {User} from "../Helpers/userReducer";
import {Route,useParams} from "react-router-dom";


const useStyles = makeStyles({
    card: {
        maxWidth: 150,
    },
    media: {
        height: 80,
    },
});




const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA';
const SET_ERROR = 'SET_ERROR';

const initialState = {
    productData: [],
    error: false,
};



const productReducer = (state = initialState, action) => {
    const newState = { ...state };
    const { type } = { ...action };

    if (type === SET_PRODUCT_DATA) {
        newState.productData = action.data;
    }
    if (type === SET_ERROR) {
        newState.error = action.error;
    }
    return newState;
};


/**
 * @return {boolean}
 */
export function ProductList(props) {
    const {state:cartState, dispatch: cartDispatch} = useContext(cartContext);
    const classes = useStyles();
    const [state, dispatch] = useReducer(productReducer, initialState);
    const { storeId } = useParams();
    const BASE_PATH = 'http://api.domingo-app.xyz/'

    useEffect(() => {
        const fetchData = async () => {
            if (!storeId) {
                return;
            }
            const url = BASE_PATH+'api/products/store/'+storeId;
            const options = {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Access-Control-Allow-Headers': 'Authorization',
                    'Content-Type': 'application/json',
                }),
                mode: 'cors',
            };

            return fetch(url, options)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
                .then(data => {
                    dispatch({ type: SET_PRODUCT_DATA, data: data.products });
                })
                .catch(error => dispatch({ type: SET_ERROR, error: true }));
        };

        dispatch({ type: SET_ERROR, error: false });

        fetchData();

    }, []);

    const hasData = state.productData !== undefined;
    if (hasData) {
        return(

            <div>
                <div>
                    <HomePageTopmenu/>
                </div>

                <div className="DomingoContainer">
                    <div className="DomingoProductSection">
                        <StoreInfoHeader/>
                        <div className="DomingoProductContainers" >{state.productData.map(p =>
                            <div className="DomingoProductContainer">
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={p.photo}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {p.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {p.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => cartDispatch({type: 'ADD_PRODUCT', product:p })}>
                                            Añadir a cesta
                                        </Button>
                                        <Button size="small" color="primary">
                                            {p.price} euros
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>)}
                        </div>
                        </div>
                    <div className="DomingoRegisterSection">
                        <div className="DomingoRegisterCard">
                            <RegisterCart/>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
    return (
        <div>
            Loading
        </div>
    );
}

export default ProductList;


