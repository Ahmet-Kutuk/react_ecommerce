import React, { useContext } from "react";
import Category from "./Category";
import { CategoryContainer } from "../../styles/Compoments/Category";
import Context from "../../Context";
import Header from "../Header";
function CategoryComponent() {
  const { categories } = useContext(Context);

  return (
    <>
      <Header />
      {
        <CategoryContainer>
          {categories ? (
            categories.map((item) => (
              <Category
                image={item.image}
                title={item.title}
                category={item.category}
              />
            ))
          ) : (
            <h1>Yükleniyor..</h1>
          )}
        </CategoryContainer>
      }
    </>
  );
}

export default CategoryComponent;
