import React, { useState , useContext} from "react";
import { CartContext } from "../../service/Cart-Context";
import { Link } from "react-router-dom";

const CarritoDisplay = ({item}) => {

    const {deleteCartItem, clearCart, cartItems} = useContext(CartContext);

    return(
            <div className="">
                <button onClick={deleteCartItem.bind(item.id)}>X</button>
                <div className="imagen-producto">
                    <img src={`/img/${item.img}`} alt={item.titulo} />
                </div>
                <div className="">
                    <h5>{item.titulo}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>{"Total: $ "+ (item.precio*item.cantidad)}</p>
                </div>
            </div>
    );
};

export default CarritoDisplay;