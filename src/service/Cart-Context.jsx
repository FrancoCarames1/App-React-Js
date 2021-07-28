import React, {useState, useEffect} from 'react';
import { useMemo } from 'react';

const CartContext = React.createContext();

export function CartProvider(props) {

    const [cartItems, setCartItems] = useState([]);

    const clearCart = () => {

        setCartItems([]);

    }

    const addCartItem = (itemObject, quantity) => {

        let cartArray = cartItems;

        if (cartArray.length === 0){
            cartArray.push({id: itemObject.id, productObject: itemObject, productQuantity: quantity});
        }else{
            cartArray.forEach(element => {
                if(element.id === itemObject.id){
                    element.productQuantity = quantity;
                }else{
                    cartArray.push({id: itemObject.id, productObject: itemObject, productQuantity: quantity});
                }
            });
        }
        setCartItems(cartArray);
        console.log(cartArray);
    }

    const deleteCartItem = (id) => {
        const positionToDelete = cartItems.findIndex( element => element.id === id);
        setCartItems.splice(positionToDelete,1);
    }

    const value = useMemo(() => {
        return ({
            cartItems,
            clearCart,
            deleteCartItem,
            addCartItem
        })
    }, [cartItems])

    return <CartContext.Provider value={value} {...props} />
}

export function useCart() {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe estar dentro del proveedor CartContext')
    }
    return context;
}