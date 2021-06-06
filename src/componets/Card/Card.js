import React,{useContext} from 'react'
import {CardItem,ActionContainer,ActionButton,CardInfo,CardImg} from '../../styles/Compoments/Card';
import Context from '../../Context';
function Card(props) {
    const {addFavorite,addCart} = useContext(Context);
    
    return (
            <CardItem>
                <CardImg src={props.image}></CardImg>
                <CardInfo>
                  <p> {props.title} </p>
                  <p>Price: {props.price}$ </p>
                </CardInfo>
                <ActionContainer>
                    <ActionButton id={props.id} onClick={(e) => addFavorite(e.currentTarget.id)} className="action-item" href="s"><i className="fas fa-heart"></i></ActionButton>
                    <ActionButton id={props.id} onClick={(e) => addCart(e.currentTarget.id)} className="action-item" href="s"><i className="fas fa-shopping-basket"></i></ActionButton>
                    <ActionButton className="action-item" href="s"><i className="fas fa-eye"></i></ActionButton>
                </ActionContainer>
            </CardItem>
    )
}

export default Card;
