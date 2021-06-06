import styled from 'styled-components';

export const FavoriteContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top:1.8rem;
    width:1200px;
    margin-left:300px;

    @media (max-width: 768px) {
        flex-direction:column;
        width:300px;
    }

`;

export const FavoriteList = styled.div`
    width:1200px;
   
    display: flex;
    position:relative;
    flex-direction:column;

    @media (max-width: 768px) {
        flex-direction:column;
        width:300px;
        position:absolute;
        left:1.5rem;
        top:150px;
    }


    h1{
        margin-left:1rem;
    }
    button{
        background:none;
        position: absolute;
        right:15px;
        z-index:5;
        font-size:24px;
        cursor:pointer;
    
    }
    
    .ınfo{
        display:flex;
        flex-direction:column;

        select{
            margin-left:1rem;
            margin-top:1rem;
        }

        p{
            margin-left:1rem;
            margin-top:2rem;
            font-size:48px;
        }
    }
`;

export const FavoriteItem =styled.div`
    display:flex;   
    border:1px solid #EAEAEB;
    &+&{
        margin-top:5rem;
    }
`;



export const FavoriteImage = styled.img`
    width:200px;
    height:200px;
    

`