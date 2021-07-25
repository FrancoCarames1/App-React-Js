import React from "react";
import { Link } from "react-router-dom";

const AddingToCartOptions = ({invertirEstado}) =>{
    return(
        <div className="contenedor-opciones">
            <Link to="/">Agregar y seguir comprando</Link>
            <button onClick={invertirEstado}>Modificar cantidad</button>
            <Link to="/cart">Finalizar compras</Link>
        </div>
    )
}

export default AddingToCartOptions;