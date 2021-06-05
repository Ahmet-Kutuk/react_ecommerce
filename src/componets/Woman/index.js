import React,{useContext} from 'react'
import Context from '../../Context'
import { CardContainer } from '../../styles/Compoments/Card'
import Woman from './Woman'
import Header from '../Header';
function WomanCompoment() {
    const {products}= useContext(Context);
    const woman = products;



    return (
        <>
        <Header />
        <CardContainer>
        {woman ? woman.map(product => (
            product.category==="woman" ?
            <Woman key={product.id} image={product.image} title={product.title} price={product.price}/>
            :null
        )):<h1>Yükleniyor..</h1>}  
        </CardContainer>
        sdf
        </>
    )
}

export default WomanCompoment
