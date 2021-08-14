import React, { useContext } from "react";
import { CartContext } from "../../service/Cart-Context";
import CompraDisplay from "./CompraDisplay";

const FormDeCompra = () =>{

    const {cartItems} = useContext(CartContext);

    return (
    <form>
        <label htmlFor="nombre">Nombre y Apellido:</label>
        <input type="text" name="nombre" id="nombre"/>
        <label htmlFor="mail">Mail:</label>
        <input type="email" name="mail" id="mail"/>
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" name="direccion" id="direccion"/>
        {cartItems.map((item) => (
            <CompraDisplay item={item}/>
        ))}
    </form>
    )
}

export default FormDeCompra;