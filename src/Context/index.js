import React,{ createContext,useEffect,useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const ContextProvider = (props) => {
    const [products,setProducts] = useState();
    const [categories,setCategories] = useState();

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const data = axios.get('https://60b12c121f2661001700005c.mockapi.io/products')
        .then(products => setProducts(products.data));
    },[])

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const category = axios.get('https://60b12c121f2661001700005c.mockapi.io/category')
        .then(category => setCategories(category.data));
    },[])


    return(
        <Context.Provider value={{products,categories}}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;