import React from "react";

const CompraDisplay = ({item}) => {


    return(
        <div className="productos-comprados">
            <p>{item.titulo} <b>x{item.cantidad}</b></p>
        </div>
    )
}

export default CompraDisplay;