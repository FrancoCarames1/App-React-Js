import React, { useContext } from "react";
import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from "../../service/Cart-Context";

const Carrito = () => {

    const {cantidadItemsCarrito} = useContext(CartContext);

    return(
        <>
            <FontAwesomeIcon icon="shopping-cart"/>
            {(cantidadItemsCarrito() > 0) ? (
                <p className="contador-items-carrito">
                    {cantidadItemsCarrito()}
                </p>
            ):(<></>)}
        </>
    );
};

export default Carrito;