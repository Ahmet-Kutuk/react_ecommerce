import React, { useContext } from "react";
import { FavoriteImage, FavoriteItem } from "../../styles/Compoments/Favorite";
import Context from "../../Context";
function Favorite(props) {
  const { deleteFavorite } = useContext(Context);
  return (
    <FavoriteItem>
      <FavoriteImage src={props.image}></FavoriteImage>
      <button id={props.id} onClick={(e) => deleteFavorite(props.title)}>
        <i className="fas fa-times"></i>
      </button>
      <div className="ınfo">
        <h1>{props.title}</h1>
        <select>
          {/* {props.sizes.map(item  => (<option key="1" value={`${item}`}>{item}</option>))} */}
        </select>
        <p>{props.price}$</p>
      </div>
    </FavoriteItem>
  );
}

export default Favorite;
