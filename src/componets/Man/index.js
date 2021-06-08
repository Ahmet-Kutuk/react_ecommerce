import React, { useContext } from "react";
import Context from "../../Context";
import { CardContainer } from "../../styles/Compoments/Card";
import Man from "./Man";
import Header from "../Header";
function ManCompoment() {
  const { products } = useContext(Context);
  const man = products;

  return (
    <>
      <Header />
      <CardContainer>
        {man ? (
          man.map((product) =>
            product.category === "man" ? (
              <Man
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ) : null
          )
        ) : (
          <h1>Yükleniyor..</h1>
        )}
      </CardContainer>
    </>
  );
}

export default ManCompoment;
