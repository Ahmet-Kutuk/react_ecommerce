import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-right: 100px;
  position: relative;
  margin-bottom: 2rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CategoryImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const CategoryItem = styled.div`
  width: 400px;
  height: 650px;
  border: 1px solid #eaeaeb;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 10px 0px black;
  margin-left: 50px;
  margin-right: 110px;
  margin-top: 30px;
  position: relative;

  @media (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;
    margin: 0;
  }
`;

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;

  p {
    font-size: 32px;
  }
`;
