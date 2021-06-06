import React,{useContext} from 'react'
import {CartImage,CartList} from '../../styles/Compoments/Cart';
import Context from '../../Context';
function Cart(props) {
    const {deleteCart} = useContext(Context);
    return (
            <CartList>
                <CartImage src={props.image}></CartImage>
                <button onClick={() => deleteCart(props.title) }><i class="fas fa-times"></i></button>
                <div className="ınfo">
                <h1>{props.title}</h1>
                <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                </select>
                <p>{props.price}</p>
                </div>
        </CartList>
    )
}

export default Cart
