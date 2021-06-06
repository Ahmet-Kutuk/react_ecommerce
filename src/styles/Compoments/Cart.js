import styled from 'styled-components';

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top:1.8rem;
    width:1200px;
    margin-left:300px;

    @media (max-width: 768px) {
        flex-direction:column;
        width:300px;
    }
`
export const List = styled.div`
    display: flex;
    flex-direction:column;


`;


export const CartList = styled.div`
    width:800px;
    border:1px solid #EAEAEB;
    display: flex;
    position:relative;
    flex-direction:row;

    @media (max-width: 768px) {
        flex-direction:column;
        width:300px;
        position:absolute;
        left:1.5rem;
        top:150px;
    }

    &+&{
        margin-top:50px;
    }

    h1{
        margin-top:20px;
        font-size:24px;
        margin-left:1rem;
    }
    button{
        background:none;
        position: absolute;
        right:20px;
        top:15px;
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
            font-size:36px;
        }
    }
`;

export const Info = styled.div`
    width:400px;
    border:1px solid #EAEAEB;
    margin-left:2rem;

    @media (max-width: 768px) {
        
        width:300px;
        display:none;
    }

    p{
        font-size:36px;
        margin-top:1rem;
        padding-left:1rem;
    }

    button{
        background:red;
        color:white;
        width:300px;
        border-radius:0.5rem;
        height:48px;
        margin-top:50px;
        cursor:pointer;
        margin-left:40px;

        @media (max-width: 768px) {
            width:200px;
            margin-bottom:40px;
        }
    }
`;

export const CartImage = styled.img`
    width:200px;
    height:200px;
    

`