import { createContext,useEffect,useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const ContextProvider = (props) => {
    const [products,setProducts] = useState();
    const [categories,setCategories] = useState();
    const [favorites,setFavorites] = useState([]);
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(120);
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


    const addFavorite = (id) => {
       const filt =  products.find(product => product.id === Number(id));
       setFavorites(prevState => [...prevState,filt]);
    }
    const addCart = (id) => {
        const filt =  products.find(product => product.id == id);
        setCart(prevState => [...prevState,filt]);
        const priceArr = cart.filter(item => item.id == id);
             setTotal(prevState => prevState+=priceArr);
     };

     const deleteCart = (title) =>  {
        const array = localStorage.getItem('cart');
        const parseArr = JSON.parse(array); // make a separate copy of the array
        const filterArr = parseArr.filter(item => item.title !== title);
        localStorage.setItem('cart',JSON.stringify(filterArr));
             setCart(filterArr); 
             const priceArr = parseArr.filter(item => item.title === title);
             setTotal(prevState => prevState-=priceArr);
      };

    const deleteFavorite = (title) =>  {
        const array = localStorage.getItem('favorite');
        const parseArr = JSON.parse(array); // make a separate copy of the array
        const filterArr = parseArr.filter(item => item.title !== title);
        localStorage.setItem('favorite',JSON.stringify(filterArr));
             return setFavorites(filterArr);
      };
      


    return(
        <Context.Provider value={{products,categories,addFavorite,deleteFavorite,favorites,addCart,cart,deleteCart,total}}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;