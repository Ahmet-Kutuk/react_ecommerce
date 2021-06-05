import styled from 'styled-components';

export const CategoryContainer = styled.div`
    margin-top:1.5rem;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    margin-right:100px;
    position:relative;
    margin-bottom:2rem;
    @media (max-width: 500px) {
        flex-direction:column;
    }
`;
export const CategoryInfo = styled.div`
    width:400px;
    height:597px;
    background:#00ead3;
    opacity:0;
    position:absolute;
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    

    &:hover{
        opacity:0.7;
    }

    p{
        margin-top:0.4rem;
        font-weight:700;
        font-size:24px;
    }
`;

export const CategoryImg = styled.img`
    width:100%;
    position:absolute;
    top:0;
    left:0;

`;
export const CategoryItem = styled.div`
    width:400px;
    height:650px;
    border:1px solid #EAEAEB;
    display:flex;
    flex-direction:column;
    box-shadow:0px 10px 10px 0px black;
    margin-right:150px;
    margin-top:30px;
    position:relative;
    
    

    @media (max-width: 500px) {
        padding-left:15px;
        padding-right:15px;
    }
   
   
`;



export const ActionContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    position:absolute;
    bottom:0;

    p{
        font-size:32px;
    }
`;


