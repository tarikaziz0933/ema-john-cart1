import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { products, initialCart } = useLoaderData();    //{ products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleAddOne = (selectedProduct1) => {
        let newCart1 = [];

        const rest1 = cart.filter(product => product.id !== selectedProduct1.id);
        selectedProduct1.quantity = selectedProduct1.quantity + 1;
        newCart1 = [...rest1, selectedProduct1];
        setCart(newCart1);
        addToDb(selectedProduct1.id)
    }
    const handleRemoveOne = (selectedProduct1) => {
        let newCart1 = [];

        const rest1 = cart.filter(product => product.id !== selectedProduct1.id);
        if (selectedProduct1.quantity < 2) {
            handleRemoveItem(selectedProduct1.id);
        }
        else {
            selectedProduct1.quantity = selectedProduct1.quantity - 1;
            newCart1 = [...rest1, selectedProduct1];
            setCart(newCart1);
            addToDb(selectedProduct1.id)
        }
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleAddOne={handleAddOne}
                        handleRemoveOne={handleRemoveOne}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;