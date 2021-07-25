import React from "react";
import { Link } from "react-router-dom";

const AddingToCartOptions = ({invertirEstado}) =>{
    return(
        <div className="contenedor-opciones">
            <Link to="/">Seguir viendo productos</Link>
            <button onClick={invertirEstado}>Modificar cantidad</button>
            <Link to="/cart">Finalizar compras</Link>
        </div>
    )
}

export default AddingToCartOptions;