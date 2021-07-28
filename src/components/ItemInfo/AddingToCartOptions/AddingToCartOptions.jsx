import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../service/Cart-Context";

const AddingToCartOptions = ({invertirEstado, item, contador}) =>{

    const {addCartItem} = useCart();

    return(
        <div className="contenedor-opciones">
            <Link to="/" onClick={this.addCartItem.bind(item, contador)}>Agregar y seguir comprando</Link>
            <button onClick={invertirEstado}>Modificar cantidad</button>
            <Link to="/cart" onClick={this.addCartItem.bind(item,contador)}>Finalizar compras</Link>
        </div>
    )
}

export default AddingToCartOptions;