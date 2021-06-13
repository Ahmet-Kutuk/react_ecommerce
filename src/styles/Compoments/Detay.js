import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 1200px;
  display: flex;
  height:600px;
  justify-content: center;
  margin:auto;
  margin-top:100px;
  border:1px solid #EAEAEB;
  padding:10px;
  box-shadow:0px 10px 10px 0px black;

  @media (max-width:500px)
  {
    width:350px;
    flex-direction:column;
    margin-top:20px;
  }
`;

export const DetailImg = styled.img`
  width: 600px;

  @media (max-width:500px)
  {
    width:175px;
  }

`;

export const DetailInfo = styled.div`
  width: 600px;
  margin-left:20px;
  display: flex;
  flex-direction: column;

  @media (max-width:500px)
  {
    width:175px;
  }

  select{
    margin-top:20px;
  }

`;

export const Buttons = styled.div`
display:flex;
margin-top:40px;
justify-content:space-evenly;

@media (max-width:500px)
  {
    
  }

button{
  background-color:#bf1363;
  padding:10px;
  border-radius:0.5rem;
  color:white;

  @media (max-width:500px)
  {
    width:110px;
    position:relative;
    left:45px;
    margin-left:20px;
    
    &+&{
      margin-top:20px;
    }
  }
}
`

export const InfoItem = styled.p`
  font-size:24px;
  margin-top:20px;
`;
