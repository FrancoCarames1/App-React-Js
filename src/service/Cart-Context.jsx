import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const clearCart = () => {

        setCartItems([]);

    }

    const itemInCart = (idBuscado) => {
        let posicionItem = cartItems.findIndex(x => x.id === idBuscado);
        return posicionItem;
    }

    const addCartItem = (itemObject, quantity) => {

        let funcionBusqueda = itemInCart(itemObject.id);

        if (funcionBusqueda === -1){
            Object.defineProperty(itemObject, 'cantidad', {
                value: quantity,
                writable: true,
                enumerable: true,
                configurable: true
            });
            setCartItems([...cartItems,itemObject])
        }else{
            let corregirCantidad = cartItems;
            corregirCantidad[funcionBusqueda].cantidad = quantity;
        }
    }

    const deleteCartItem = (id) => {
        let cartArray = cartItems;
        const positionToDelete = cartArray.findIndex( element => element.id === id);
        cartArray.splice(positionToDelete,1);
        setCartItems(cartArray);
    }

    const montoFinal = () => {
        let monto = 0
        cartItems.forEach(item => {
            monto = monto + item.cantidad * item.precio
        });
        return monto
    }

    const cantidadItemsCarrito = () =>{
        let cantidadCarrito = 0;
        if (cartItems.length === 0) {
            return cantidadCarrito;
        }else{
            cartItems.forEach(item => {
                cantidadCarrito = cantidadCarrito + item.cantidad;
            });
            return cantidadCarrito
        }
    }

    return (<CartContext.Provider value={{cartItems,clearCart, deleteCartItem, addCartItem, montoFinal, cantidadItemsCarrito}}>{children}</CartContext.Provider>);
};