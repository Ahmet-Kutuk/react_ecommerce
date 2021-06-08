import React from "react";
import { DetailImg, DetailInfo } from "../../styles/Compoments/Detay";
function Detay(props) {
  return (
    <>
      <DetailImg src={props.image}></DetailImg>
      <DetailInfo>
        <p>{props.title}</p>
        <p>{props.price}</p>
        <p>{props.sizes}</p>
        <button>Sepete Ekle</button>
        <button>Favorilere Ekle</button>
        <button>Anasayfaya Git</button>
      </DetailInfo>
    </>
  );
}

export default Detay;
