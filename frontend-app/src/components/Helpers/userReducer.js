import React from 'react';
import{get} from "./ServerMethods";




//
 /*const getinitialState =  () => {

     if(localStorage.getItem('token')){


         get('/api/users/' +localStorage.getItem('token'))
             .then(response => {

             return {
                 User: response.user,
                 token:localStorage.getItem('token')
             }
         });


     }
     else {
         return{
             User: {},
             token: ''
         }
     }
 };*/
const initialState =  {
    User: {},
    token: ''
};

export const User = React.createContext();



function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':

            return { state, User: action.payload.user, token: action.payload.token };
        case 'LOG_OUT':
            localStorage.clear();
            return { state, User: {}, token: '' };

        default:
            return state;
    }
}

export function UserProvider(props) {



    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <User.Provider value={value}>{props.children}</User.Provider>
    );
}

//Acciones Get y Set

//