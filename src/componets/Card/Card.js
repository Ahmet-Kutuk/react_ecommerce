import React, { useContext } from "react";
import {
  CardItem,
  ActionContainer,
  ActionButton,
  CardInfo,
  CardImg,
} from "../../styles/Compoments/Card";
import {Link} from 'react-router-dom';
import Context from "../../Context";
function Card(props) {
  const { addFavorite, addCart, showDetail } = useContext(Context);

  return (
    <CardItem>
      <CardImg src={props.image}></CardImg>
      <CardInfo>
        <p> {props.title} </p>
        <p>Price: {props.price}$ </p>
      </CardInfo>
      <ActionContainer>
        <ActionButton
          onClick={() => addFavorite(props.title)}
          className="action-item"
          href="s"
        >
          <i className="fas fa-heart"></i>
        </ActionButton>
        <ActionButton
          onClick={() => addCart(props.title)}
          className="action-item"
          href="s"
        >
          <i className="fas fa-shopping-basket"></i>
        </ActionButton>
        <Link to="/detail"><ActionButton
          onClick={() => showDetail(props.title)}
          className="action-item"
          
        >
          <i className="fas fa-eye"></i>
        </ActionButton></Link>
      </ActionContainer>
    </CardItem>
  );
}

export default Card;
