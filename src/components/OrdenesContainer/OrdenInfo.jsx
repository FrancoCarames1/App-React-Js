import React from "react";

const OrdenInfo = ({ displayOrdenInfo: orden }) => {

    return(
        <div className='container-orden'>
            <h2>Orden número: {orden.id}</h2>
            <div className="orden">
                    <h5>Pedido de {orden.nombre}</h5>
                    <p>Lista de items:</p>
                    {orden.itemsComprados.map((items) => (
                        <ul>
                            <li>{items.titulo} <b>x{items.cantidad}</b></li>
                        </ul>
                    ))}
            </div>
        </div>
    )

};

export default OrdenInfo;