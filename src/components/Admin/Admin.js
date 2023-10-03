import React, { useState } from 'react';
import './Admin.css'

const Admin = () => {
    const [product, setProduct] = useState({});

    const handleAddProduct = event => {
        event.preventDefault();
        console.log(product);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Product added successfully');
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...product }
        newProduct[field] = value;
        setProduct(newProduct);
        console.log(newProduct);
    }

    return (
        <div>
            <h2>Admin</h2>

            <div className='add-product'>
                <h3>Add Product</h3>
                <form onSubmit={handleAddProduct}>
                    <input onBlur={handleInputBlur} type="text" name="category" placeholder="Enter category" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="name" placeholder="Enter name" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="seller" placeholder="Enter seller" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="price" placeholder="Enter price" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="stock" placeholder="Enter stock" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="ratings" placeholder="Enter ratings" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="ratingsCount" placeholder="Enter ratingsCount" required />
                    <br />
                    <input onBlur={handleInputBlur} type="file" name="image" id="" />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="shipping" placeholder="Enter shipping" required />
                    <br />
                    <input onBlur={handleInputBlur} type="text" name="quantity" placeholder="Enter quantity" required />
                    <br />
                    <button type="submit">Add Product</button>
                </form>
            </div>

            {/* {
        "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        "category": "Men's Sneaker",
        "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
        "seller": "Addidas",
        "price": 196,
        "stock": 19,
        "ratings": 5,
        "ratingsCount": 4355,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
    }, */}
        </div>
    );
};

export default Admin;