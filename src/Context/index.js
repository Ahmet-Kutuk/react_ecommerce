import { createContext,useEffect,useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const ContextProvider = (props) => {
    const [products,setProducts] = useState();
    const [categories,setCategories] = useState();
    const [favorites,setFavorites] = useState([]);
    const [detail,setDetail] = useState([]);
    const [cart,setCart] = useState([]);
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

    useEffect(() => {
        localStorage.setItem("favorite",JSON.stringify(favorites));
    },[favorites])

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])


    const addFavorite = (title) => {
       const filt =  products.find(product => product.title === title);
       setFavorites(prevState => [...prevState,filt]);
    }
    const addCart = (title) => {
        const filt =  products.find(product => product.title === title);
        setCart(prevState => [...prevState,filt]);
     };

     const deleteCart = (title) =>  {
        const array = localStorage.getItem('cart');
        const parseArr = JSON.parse(array); // make a separate copy of the array
        const filterArr = parseArr.filter(item => item.title !== title);
        localStorage.setItem('cart',JSON.stringify(filterArr));
           return  setCart(filterArr); 
             
             
      };

    const deleteFavorite = (title) =>  {
        const array = localStorage.getItem('favorite');
        const parseArr = JSON.parse(array); // make a separate copy of the array
        const filterArr = parseArr.filter(item => item.title !== title);
        localStorage.setItem('favorite',JSON.stringify(filterArr));
             return setFavorites(filterArr);
      };

      const showDetail = async (title) =>  {
        const filt =  products.find(product => product.title === title);
        setDetail([filt]);
      }
      


    return(
        <Context.Provider value={{products,categories,addFavorite,deleteFavorite,favorites,addCart,cart,deleteCart,detail,showDetail}}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;