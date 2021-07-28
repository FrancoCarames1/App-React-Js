import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../service/Cart-Context";

const AddingToCartOptions = ({invertirEstado, itemProducto, cantidadProducto}) =>{

    const {addCartItem} = useCart();

    return(
        <div className="contenedor-opciones">
            <Link to="/" onClick={addCartItem.bind(itemProducto, cantidadProducto)}>Agregar y seguir comprando</Link>
            <button onClick={invertirEstado}>Modificar cantidad</button>
            <Link to="/cart" onClick={addCartItem.bind(itemProducto, cantidadProducto)}>Finalizar compras</Link>
        </div>
    )
}

export default AddingToCartOptions;