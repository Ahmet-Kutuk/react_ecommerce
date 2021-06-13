import React,{useContext} from 'react'
import Detay from './Detay';
import Header from '../Header';
import {DetailContainer} from '../../styles/Compoments/Detay';
import Context from '../../Context';
function DetayCompoment() {
    const {detail} = useContext(Context);
    
    return (
    <>
        <Header />
        <DetailContainer>
        {detail ? detail.map(item => (
            <Detay key={item.id} image={item.image} price={item.price} sizes={item.sizes} title={item.title} />
        )):<h1>Yükleniyor..</h1>}
          
        </DetailContainer>
       
    </>
    )
}

export default DetayCompoment
