import React, { useContext } from "react";
import {
  ActionContainer,
  CardImg,
  CardInfo,
  CardItem,
  ActionButton,
} from "../../styles/Compoments/Card";
import Context from "../../Context";
import { Link } from "react-router-dom";

function Woman(props) {
  const { addFavorite, addCart, showDetail } = useContext(Context);
  return (
    <>
      <CardItem>
        <CardImg src={props.image}></CardImg>
        <CardInfo>
          <p> {props.title} </p>
          <p>Price: {props.price}$</p>
        </CardInfo>
        <ActionContainer>
          <ActionButton
            onClick={() => addFavorite(props.title)}
            class="action-item"
            href="s"
          >
            <i class="fas fa-heart"></i>
          </ActionButton>
          <ActionButton
            onClick={() => addCart(props.title)}
            class="action-item"
            href="s"
          >
            <i class="fas fa-shopping-basket"></i>
          </ActionButton>
          <Link to="/detail">
            <ActionButton
              onClick={() => showDetail(props.title)}
              class="action-item"
              href="s"
            >
              <i class="fas fa-eye"></i>
            </ActionButton>
          </Link>
        </ActionContainer>
      </CardItem>
    </>
  );
}

export default Woman;
