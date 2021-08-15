import React from "react";

const CompraDisplay = ({item}) => {


    return(
        <div className="productos-comprados">
            <h5>{item.titulo}</h5>
            <p>{item.cantidad}</p>
        </div>
    )
}

export default CompraDisplay;