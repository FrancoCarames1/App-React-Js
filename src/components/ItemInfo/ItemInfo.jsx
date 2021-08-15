import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../service/Cart-Context";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemInfo.css";

const ItemInfo = ({ displayItemInfo: item }) => {

    const {addCartItem} = useContext(CartContext);

    const [contador, setContador] = useState(1);

    const [estadoTerminarCompra, setEstadoTerminarCompra] = useState(false);

    const invertirEstado = () => setEstadoTerminarCompra(!estadoTerminarCompra);

    const restarUno = () => {

        if (contador <= 1) {
            alert("No se puede comprar menos de una unidad")
        } else {
            setContador(contador - 1)
        }

    };

    const sumarUno = () => {

        if (contador >= item.stock) {
            alert("No hay más stock")
        } else {
            setContador(contador + 1)
        }

    };

    const activarAddCartItem = () =>{
        addCartItem(item, contador);
    }

    return(
        <div className="item-info">
            <div className="contenedor-imagen">
                <img src={`${item.img}`} alt={item.titulo} />
            </div>
            <div className="descripcion">
                <h5>{item.titulo}</h5>
                <p>{"$ "+item.precio}</p>
                {!estadoTerminarCompra ? (
                    <ItemCount contador={contador} restarUno={restarUno} sumarUno={sumarUno} invertirEstado={invertirEstado}/>
                ):(
                    <div className="contenedor-opciones">
                        <Link to="/" onClick={activarAddCartItem}>Agregar y seguir comprando</Link>
                        <button onClick={invertirEstado}>Modificar cantidad</button>
                        <Link to="/carrito" onClick={activarAddCartItem}>Finalizar compras</Link>
                    </div>
                )}
            </div>
        </div>
    )

};

export default ItemInfo;