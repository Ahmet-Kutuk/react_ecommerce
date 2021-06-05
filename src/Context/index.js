import React,{ createContext } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {

    return(
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;