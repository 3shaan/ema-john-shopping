import React from 'react';

const BuyHistory = (props) => {
    const {cart, buyCart} = props;
    let TotalPrice = 0;
    let shipping = 0;
    let Quantity = 0;
    for ( const Products of buyCart){
        Quantity = Quantity + Products.quantity;
        TotalPrice = TotalPrice + (Products.price * Products.quantity);
        shipping = shipping + (Products.shipping);
    }
    let tax= (TotalPrice * 0.1).toFixed(2) ;
    let grandPrice = TotalPrice + shipping + parseFloat(tax) ;
    return (
        <div className='fixed'>
            <h1 className='text-3xl'>Total cart : {cart.length}</h1>
            <p className='text-xl'>Cart Add : {Quantity}</p>
            <p className='text-xl'>Total Price : ${TotalPrice}</p>
            <p className='text-xl'>Total Shipping : ${shipping}</p>
            <p className='text-xl'>Tax : ${tax}</p>
            <h1 className='text-2xl'>Grnad Price: {grandPrice}</h1>

        </div>
    );
};

export default BuyHistory;