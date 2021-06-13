import React,{useContext} from "react";
import { DetailImg, DetailInfo,InfoItem,Buttons } from "../../styles/Compoments/Detay";
import {Link} from 'react-router-dom';
import Context from '../../Context';
function Detay(props) {
  const { addFavorite, addCart } = useContext(Context);
  return (
    <>
      <DetailImg src={props.image}></DetailImg>
      <DetailInfo>
        <InfoItem>{props.title}</InfoItem>
        <InfoItem>{props.price}$</InfoItem>
        <select>
          {props.sizes.map((item) => (
            <option key={item} value={`${item}`}>
              {item}
            </option>
          ))}
        </select>
        <Buttons>
        <button onClick={() => addCart(props.title)}>Sepete Ekle</button>
        <button onClick={() => addFavorite(props.title)}>Favorilere Ekle</button>
        <Link to="/"><button>Anasayfaya Git</button></Link>
        </Buttons>
      </DetailInfo>
    </>
  );
}

export default Detay;
