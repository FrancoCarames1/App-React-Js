import React from "react";

const ItemCount = ({ contador, restarUno, sumarUno, invertirEstado, pasarCantidadCarro}) => {
    return(
        <div className="contenedor-botones">
            <div className="contador-items">
                <button onClick={restarUno}>-</button>
                <p>{contador}</p>
                <button onClick={sumarUno}>+</button>
            </div>
            <button className="agregar-carrito" onClick={invertirEstado,pasarCantidadCarro}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;