import React, { useContext} from "react";
import { CartContext } from "../../service/Cart-Context";

const CarritoDisplay = ({item}) => {

    const {deleteCartItem} = useContext(CartContext);

    return(
            <div className="producto-carrito">
                <button onClick={deleteCartItem.bind(item.id)}>X</button>
                <div className="imagen-producto">
                    <img src={`/img/${item.img}`} alt={item.titulo} />
                </div>
                <div className="descripcion-producto">
                    <h5>{item.titulo}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>{"Total: $ "+ (item.precio*item.cantidad)}</p>
                </div>
            </div>
    );
};

export default CarritoDisplay;