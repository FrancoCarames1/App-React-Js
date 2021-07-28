import React, {useState, useEffect} from 'react';
import { useMemo } from 'react';

const CartContext = React.createContext();

export function CartProvider(props) {

    const [cartItems, setCartItems] = useState([]);

    const clearCart = () => {

        setCartItems([]);

    }

    //Volver a escribir addCartItem primero con una función que verifique si está el item y si esta solo modificar el valor, sino agregar el item (Hace demasiados render)

    const addCartItem = (itemObject, quantity) => {

        let cartArray = cartItems;

        if (cartArray.length === 0){
            cartArray.push({id: itemObject.id, productObject: itemObject, productQuantity: quantity});
            setCartItems(cartArray);
        }else{
            let encontroItem = false;

            cartArray.forEach(element => {
                if(element.id === itemObject.id){
                    element.productQuantity = quantity;
                    encontroItem = true;
                }
            });

            if(encontroItem === "false"){
                cartArray.push({id: itemObject.id, productObject: itemObject, productQuantity: quantity});
            } else {
                console.log("Ya existia el item y se modifico la cantidad a pedir")
            }
            setCartItems(cartArray);
            console.log(cartArray);
        }
    }

    const deleteCartItem = (id) => {
        let cartArray = cartItems;
        const positionToDelete = cartArray.findIndex( element => element.id === id);
        cartArray.splice(positionToDelete,1);
        setCartItems(cartArray);
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