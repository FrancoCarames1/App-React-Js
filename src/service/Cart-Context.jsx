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

        let funcionBusqueda = itemInCart(itemObject.id)

        if (funcionBusqueda === -1){
            setCartItems([...cartItems,{id: itemObject.id, item: itemObject, cantidad: quantity}])
        }else{
            let corregirCantidad = cartItems;
            corregirCantidad[funcionBusqueda].cantidad = quantity
        }

        // let cartArray = cartItems;
        // console.log(itemObject)
        // console.log(quantity)

        // let encontroItem = false;

        // cartArray.forEach(element => {
        //     if(element.id === itemObject.id){
        //         element.productQuantity = quantity;
        //         encontroItem = true;
        //     }
        // });

        // if(encontroItem === "false"){
        //     cartArray.push({id: itemObject.id, productObject: itemObject, productQuantity: quantity});
        //     setCartItems(cartArray);
        // } else {
        //     console.log("Ya existia el item y se modifico la cantidad a pedir")
        //     setCartItems(cartArray);
        // }
    }

    const deleteCartItem = (id) => {
        let cartArray = cartItems;
        const positionToDelete = cartArray.findIndex( element => element.id === id);
        cartArray.splice(positionToDelete,1);
        setCartItems(cartArray);
    }

    return (<CartContext.Provider value={{cartItems,clearCart, deleteCartItem, addCartItem}}>{children}</CartContext.Provider>);
};