import React,{useContext} from 'react'
import Cart from './Cart'
import Header from '../Header';
import {CartContainer,List} from '../../styles/Compoments/Cart';
import Context from '../../Context';
function CartCompoment() {
    const {cart} = useContext(Context);
   
    return (
        <>
             <Header />  
            <CartContainer>
                <List>
                    {cart ? cart.map(item => (
                        <Cart  key={item.id} price={item.price} title={item.title} image={item.image} />
                    )):<h1>Yükleniyor..</h1>}
                </List>
            
            </CartContainer>
        </>
    )
}

export default CartCompoment
