import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../../service/Cart-Context";
import {productosArray} from "../../../productos/productosArray.json";

const AddingToCartOptions = ({invertirEstado, cantidadProducto}) =>{

    const {addCartItem} = useCart();

    const {id: idProducto} = useParams();

    const [informacionProducto, setInformacionProducto] = useState();

    setInformacionProducto(productosArray.find((item)=> item.id.toString() === idProducto))

    return(
        <div className="contenedor-opciones">
            <Link to="" onClick={addCartItem.bind(informacionProducto, cantidadProducto)}>Agregar y seguir comprando</Link>
            <button onClick={invertirEstado}>Modificar cantidad</button>
            <Link to="/cart" onClick={addCartItem.bind(informacionProducto, cantidadProducto)}>Finalizar compras</Link>
        </div>
    )
}

export default AddingToCartOptions;