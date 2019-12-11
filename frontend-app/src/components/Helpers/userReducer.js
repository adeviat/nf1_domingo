import React from 'react';
import{get} from "./ServerMethods";





const initialState =  {
    User: {},
    token: localStorage.getItem('token') || '',

};

export const User = React.createContext();



function reducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            localStorage.setItem('token', action.payload.change.token);

            return { ...state, User: action.payload.change, token: action.payload.change.token };
        case 'SET_USER':
            localStorage.setItem('token', action.payload.token);
            return { ...state, User: action.payload.user, token: action.payload.token };
        case 'LOG_OUT':
            localStorage.clear();
            return { ...state, User: {}, token: '' };

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

