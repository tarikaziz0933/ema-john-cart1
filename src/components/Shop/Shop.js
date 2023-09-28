import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddTOCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddTOCart={handleAddTOCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>for cart</h3>
                <p>Total Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;