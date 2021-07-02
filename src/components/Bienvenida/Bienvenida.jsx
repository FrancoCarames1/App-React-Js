import React from "react";
import "./Bienvenida.css";

const Bienvenida = (props) => {
    return(
        <h2>{props.darBienvenida}</h2>
    );
};

export default Bienvenida;