import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { product, handleAddTOCart } = props;
    const { name, img, seller, price, ratings } = product;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h1 className='product-name'>{name}</h1>
                <p>Price:{price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Rating:{ }ratings</small></p>
            </div>
            <button onClick={() => handleAddTOCart(product)} className='button-cart'>
                <p>Add TO Cart</p>
            </button>
        </div>
    );
};

export default Product;