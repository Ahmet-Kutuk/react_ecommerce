import React,{useEffect,useState,useContext} from 'react'
import Favorite from './Favorite'
import Header from '../Header/index';
import Context from '../../Context';
import { FavoriteContainer,FavoriteList } from '../../styles/Compoments/Favorite'

function FavoriteCompoment() {
    const {favorites} = useContext(Context)
        //  const [list,SetList] = useState();
    console.log(favorites);

    // useEffect(() => {
    //     const data = localStorage.getItem('favorite');
    //     const pars = JSON.parse(data);
    //     SetList(pars);
    // },[favorite])

    return (
        <>
        <Header />
        <FavoriteContainer>
            <FavoriteList>
                {favorites ? favorites.map(item => (
                    <Favorite key={item.id} image={item.image} id={item.id} title={item.title} sizes={item.sizes} price={item.price} />  
                )):<h1>Yükleniyor..</h1>}
            </FavoriteList>
        </FavoriteContainer>
    
        </>
    )
}

export default FavoriteCompoment
