import React, { useEffect, useState } from 'react';
import {DataFromLocal, LocalStorage} from '../LocalStorage/LocalStorage';
import BuyHistory from './Cart/Buy-HIstory/BuyHistory';
import Cart from './Cart/Cart';

const MainBody = () => {
   const [carts, setCart] = useState([]);
   const [buyCart, setBuyCart]= useState([],);
   useEffect(()=>{
    fetch('./Products.json')
    .then (res => res.json())
    .then(data => setCart(data))
   },[]);

  useEffect(()=>{
    const loadData = DataFromLocal();
    const savedData = [];
    for ( const data in loadData){
        const findData = carts.find(product => product.id === data);
        if ( findData){
            findData.quantity= loadData[data];
            savedData.push(findData);
        }
    }
    setBuyCart(savedData);
  },[carts])




   const BuyProducs =(props)=>{
    let newBuyCart =[];
    const exists = buyCart.find(cart => cart.id === props.id)
    if(!exists){
        props.quantity = 1 ;
        newBuyCart = [...buyCart, props];
    }
    else{
        const rest  = buyCart.filter(cart => cart.id !== props.id)
        exists.quantity = exists.quantity + 1 ;
        newBuyCart = [...rest, exists];
    }
    setBuyCart(newBuyCart);
    LocalStorage(props.id);
   }
   DataFromLocal();
    return (
        <div className='flex mt-10'>
            <div className='grid grid-cols-3 gap-10'>
                {
                    carts.map(cart => <Cart cart={cart} BuyProducs={BuyProducs} key={cart.id}></Cart>)
                }
                
            </div>
            <div className='ml-10 relative'>
                <BuyHistory buyCart={buyCart} cart={carts}></BuyHistory>
            </div>
        </div>
    );
};

export default MainBody;