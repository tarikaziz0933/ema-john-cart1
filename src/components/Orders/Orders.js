import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { addToDb, deleteShoppingCart, removeFromDb, removeOneFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { products, initialCart } = useLoaderData();    //{ products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (_id) => {
        const remaining = cart.filter(product => product._id !== _id);
        setCart(remaining);
        removeFromDb(_id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleAddOne = (selectedProduct1) => {
        let newCart1 = [];

        const rest1 = cart.filter(product => product._id !== selectedProduct1._id);
        selectedProduct1.quantity = selectedProduct1.quantity + 1;
        newCart1 = [selectedProduct1, ...rest1];
        setCart(newCart1);
        addToDb(selectedProduct1._id)
    }
    const handleRemoveOne = (selectedProduct1) => {
        let newCart1 = [];

        const rest1 = cart.filter(product => product._id !== selectedProduct1._id);
        if (selectedProduct1.quantity < 2) {
            // const remaining = cart.filter(product => product._id !== selectedProduct1._id);
            setCart(rest1);
            removeFromDb(selectedProduct1._id);
            // handleRemoveItem(selectedProduct1._id);
        }
        else {
            selectedProduct1.quantity = selectedProduct1.quantity - 1;
            newCart1 = [selectedProduct1, ...rest1];
            setCart(newCart1);
            removeOneFromDb(selectedProduct1._id)
        }
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleAddOne={handleAddOne}
                        handleRemoveOne={handleRemoveOne}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No items for Review.Please <Link to='/'>Shop More</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <button>
                        <Link to='/shipping'>Proceed Shipping</Link>
                    </button>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;