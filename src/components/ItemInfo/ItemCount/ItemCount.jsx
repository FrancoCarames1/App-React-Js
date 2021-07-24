import React, {useState} from "react";

const ItemCount = ({ contador, restarUno, sumarUno }) => {
    return(
        <div className="contenedor-botones">
                    <div className="contador-items">
                        <button onClick={restarUno}>-</button>
                        <p>{contador}</p>
                        <button onClick={sumarUno}>+</button>
                    </div>
                    <button className="agregar-carrito">Agregar al carrito</button>
                </div>
    );
};

export default ItemCount;