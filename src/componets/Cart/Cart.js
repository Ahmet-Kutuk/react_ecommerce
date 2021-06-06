import React from 'react'
import {CartContainer,CartList,Info,CartImage} from '../../styles/Compoments/Cart';
function Cart() {
    return (

        <CartContainer> 
            <CartList>
                <CartImage src="https://media.discordapp.net/attachments/341583683162996748/850680286588043274/ince-askili-crop-atlet---siyah-14d03-.png?width=446&height=670"></CartImage>
                <button><i class="fas fa-times"></i></button>
                <div className="ınfo">
                <h1>Siyah Crop</h1>
                <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                </select>
                <p>29.99$</p>
                </div>
            </CartList>
            <Info>
            <p>Total Price : </p>
            <p>29.99$</p>
            <button>Buy</button>
            </Info>
        </CartContainer>
    )
}

export default Cart
