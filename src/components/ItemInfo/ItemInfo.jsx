import React, {useState} from "react";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemInfo.css";

const ItemInfo = ({ displayItemInfo: item }) => {

    const [contador, setContador] = useState(1);

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

    return (
        <div className="item-info" id={"producto-" + item.id}>
            <div className="contenedor-imagen">
                <img src={`/img/${item.img}`} alt={item.titulo} />
            </div>
            <div className="descripcion">
                <h5>{item.titulo}</h5>
                <p>{"$ "+item.precio}</p>
                <ItemCount contador={contador} restarUno={restarUno} sumarUno={sumarUno} />
            </div>
        </div>
    )

};

export default ItemInfo;