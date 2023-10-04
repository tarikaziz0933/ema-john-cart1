import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('https://ema-john-cart1-server.vercel.app/products');
    const products = await productsData.json();

    const savedCart = getShoppingCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}