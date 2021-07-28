import React, {useState} from "react";
import AddingToCartOptions from "./AddingToCartOptions/AddingToCartOptions";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemInfo.css";

const ItemInfo = ({ displayItemInfo: item }) => {

    const [contador, setContador] = useState(1);

    const [estadoTerminarCompra, setEstadoTerminarCompra] = useState(false);

    const invertirEstado = () => setEstadoTerminarCompra(!estadoTerminarCompra);

    const [itemObservado, setItemObservado] = useState();

    const [cantidadProducto, setCantidadProducto] =useState();

    setItemObservado(item);

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

    const pasarCantidadCarro = () => {

        setCantidadProducto(contador)

    }

    return(
        <div className="item-info" id={"producto-" + item.id}>
            <div className="contenedor-imagen">
                <img src={`/img/${item.img}`} alt={item.titulo} />
            </div>
            <div className="descripcion">
                <h5>{item.titulo}</h5>
                <p>{"$ "+item.precio}</p>
                {!estadoTerminarCompra ? (
                    <ItemCount contador={contador} restarUno={restarUno} sumarUno={sumarUno} invertirEstado={invertirEstado} pasarCantidadCarro={pasarCantidadCarro}/>
                ):(
                    <AddingToCartOptions invertirEstado={invertirEstado} itemProducto={itemObservado} cantidadProducto={cantidadProducto}/>
                )}
            </div>
        </div>
    )

};

export default ItemInfo;