import React from "react";

const Cart = (props) => {
    // console.log(props.BuyProducs);
    const {img,category, name, price, ratings, seller ,stock} = props.cart;
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img ? img : 'no images'} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{category}</h2>
            <h2 className="card-title">{name}</h2>
            <p>Price : ${price}</p>
            <p>Ratings : {ratings}</p>
            <p>Seller : {seller}</p>
            <p>Stocks : {stock}</p>
            <div className="card-actions justify-end">
            <button onClick={()=>props.BuyProducs(props.cart)} className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Cart;