import React, {createContext, useContext, useEffect, useReducer} from "react";
import DomingoProductItem from "../../../components/DomingoProductItem/DomingoProductItem";
import {get} from "../../../components/Helpers/ServerMethods";

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

    const {state,dispatch} = React.useContext(storeContext);
    const { category } = props;

    useEffect(() =>{

        dispatch ({
            type:'STORES_REQUESTED'
        });
        get('api/store/category/'+category)
            .then(response =>{
                console.log("parsing respose");
                dispatch ({
                    type:'STORES_REQUESTED_SUCCESS',
                    payload: response.stores

                });
            })
            .catch(error => {
                console.log(error);
                //dispatch()
            })
    }, [category]);
    console.log(state);
    return (
        <div className="DomingoProductContainers">
            {state.storeCollection.map(store => <DomingoProductItem  key={store.name} store={store}/>)}
        </div>
    )
};
