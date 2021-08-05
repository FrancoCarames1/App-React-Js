import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext} from "react";
import { CartContext } from "../../service/Cart-Context";

const CarritoDisplay = ({item}) => {

    const {deleteCartItem} = useContext(CartContext);

    return(
            <div className="producto-carrito">
                <div className="imagen-producto">
                    <img src={`${item.img}`} alt={item.titulo} />
                </div>
                <div className="descripcion-producto">
                    <h5>{item.titulo}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>{"Total: $ "+ (item.precio*item.cantidad)}</p>
                    <button className="boton-borrar-item" onClick={deleteCartItem.bind(item.id)}><FontAwesomeIcon icon="trash-alt"/></button>
                </div>
            </div>
    );
};

export default CarritoDisplay;