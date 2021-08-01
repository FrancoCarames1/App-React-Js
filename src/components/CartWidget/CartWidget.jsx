import React, { useContext, useState } from "react";
import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from "../../service/Cart-Context";

const Carrito = () => {

    const {cantidadFinalItems} = useContext(CartContext);

    return(
        <>
            <FontAwesomeIcon icon="shopping-cart"/>
            {(cantidadFinalItems > 0) ? (
                <p className="contador-items-carrito">
                    {cantidadFinalItems}
                </p>
            ):(<></>)}
        </>
    );
};

export default Carrito;