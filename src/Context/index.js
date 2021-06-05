import React,{ createContext,useEffect,useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const ContextProvider = (props) => {
    const [products,setProducts] = useState();

    useEffect(() => {
        const data = axios.get('https://60b12c121f2661001700005c.mockapi.io/products')
        .then(products => setProducts(products.data));
    },[])


    return(
        <Context.Provider value={{products}}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;