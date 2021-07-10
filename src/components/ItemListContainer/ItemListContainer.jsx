import React from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount/ItemCount";

const Bienvenida = (props) => {
    return(
        <div>
            <h2>{props.darBienvenida}</h2>
            <div className="productos">
                <ItemCount nombreItem="Póster de Luffy (Wanted)"/>
            </div>
        </div>
    );
};

export default Bienvenida;