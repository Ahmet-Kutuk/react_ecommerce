import React from 'react'
import { ActionContainer, CardImg, CardInfo, CardItem, ActionButton } from '../../styles/Compoments/Card'

function Woman(props) {
    return (
        <>
        
        <CardItem>
            <CardImg src={props.image}></CardImg>
            <CardInfo>
                 <p> {props.title} </p>
                 <p>Price: {props.price}$</p>
            </CardInfo>
            <ActionContainer>
                <ActionButton class="action-item" href="s"><i class="fas fa-heart"></i></ActionButton>
                <ActionButton class="action-item" href="s"><i class="fas fa-shopping-basket"></i></ActionButton>
                <ActionButton class="action-item" href="s"><i class="fas fa-eye"></i></ActionButton>
            </ActionContainer>
        </CardItem>
    </>
    )
}

export default Woman
