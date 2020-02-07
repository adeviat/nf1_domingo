import React, {createContext, useContext, useEffect, useReducer, useState} from "react";

import DomingoProductItem from "../../../components/DomingoProductItem/DomingoProductItem";
import {get} from "../../../components/Helpers/ServerMethods";
import {User} from "../../../components/Helpers/userReducer";
import AddressModal from "../../../components/AddressModal";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {DialogContent} from "@material-ui/core";

const initialStoreState = {
    category: "",
    isFetching: false,
    lastFetchDate: undefined,
    storeCollection: [],
    selectedStore: {},
    errorMessage: "",
    hasError: false
};

const storeContext =  createContext();

function reducer(state = initialStoreState, action) {
    switch (action.type) {
        case 'STORES_REQUESTED':
            return { ...state, isFetching: true};
        case 'STORES_REQUESTED_SUCCESS':
            return { ...state, isFetching: false, storeCollection: action.payload, lastFetchDate: new Date() };
        case 'STORES_REQUESTED_ERROR':
            return { ...state,isFetching: false, errorMessage: action.errorMessage, hasError: true, lastFetchDate: new Date() };
        default:
            return state;
    }
}

export function StoresProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialStoreState);
    const value = { state, dispatch };
    return (
        <storeContext.Provider value={value}>{props.children}</storeContext.Provider>
    );
}


export const StoreContainer = (props) => {

    const {state,dispatch} = useContext(storeContext);
    const {state: userState,dispatch: userDispatch} = useContext(User);
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [isPostcode, setIsPostCode] = useState(true);
    const [visible, setVisible] = useState(false);
    const { category } = props;
    const postcode = userState.User.postcode;
    console.log(postcode);
    useEffect(() =>{
        if(userState.User.postcode){

            setIsPostCode(true);
        }
        else
            setIsPostCode(false);

    },[postcode]);


    useEffect(() =>{

        dispatch ({
            type:'STORES_REQUESTED'
        });
            if(!postcode)
            {
                console.log(userState.token);

                if(userState.token == "")
                {
                    console.log("storesCAtegory");
                    get('api/store/category/'+category)
                        .then(response =>{
                            setVisible(true);
                            dispatch ({
                                type:'STORES_REQUESTED_SUCCESS',
                                payload: response.stores

                            });
                        })
                        .catch(error => {
                            console.log(error);
                            //dispatch()
                        });
                }
                else {
                    console.log(isPostcode);
                    setOpenAddressModal(true);
                }
            }

            else {

                    get('api/store/category/'+category+'/'+postcode)
                        .then(response => {
                            setVisible(true);
                            dispatch ({
                                type:'STORES_REQUESTED_SUCCESS',
                                payload: response.stores

                            });
                        });
                }

    }, [category, isPostcode]);


    return (
        <div className="DomingoProductContainers">
            {visible ? (state.storeCollection.map(store => <DomingoProductItem  key={store.name} store={store}/>)) :
                (<Dialog open={openAddressModal} onClose={e => setOpenAddressModal(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title d-flex">
                        Añade la dirección de entrega
                        <div className="closebtnbox">
                            <button className="closebtn" onClick={() => setOpenAddressModal(false)}>
                                <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/close-icon.svg"/>
                            </button>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <AddressModal setOpenAddressModal={setOpenAddressModal} />
                    </DialogContent>
            </Dialog>)
                }

        </div>
    )
};
