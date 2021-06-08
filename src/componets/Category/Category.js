import React from "react";
import { Link } from "react-router-dom";
import {
  CategoryItem,
  ActionContainer,
  CategoryImg,
} from "../../styles/Compoments/Category";
function Category(props) {
  return (
    <CategoryItem>
      <Link to={`/${props.category}`}>
        <CategoryImg src={props.image}></CategoryImg>
        <ActionContainer>
          <p>{props.title} </p>
        </ActionContainer>
      </Link>
    </CategoryItem>
  );
}

export default Category;
