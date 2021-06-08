import React, { useContext } from "react";
import Card from "./Card";
import Context from "../../Context";
import { CardContainer } from "../../styles/Compoments/Card";
function CardComponent() {
  const data = useContext(Context);
  const products = data.products;

  return (
    <>
      <CardContainer>
        {products ? (
          products.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <h1>Yükleniyor..</h1>
        )}
      </CardContainer>
    </>
  );
}

export default CardComponent;
