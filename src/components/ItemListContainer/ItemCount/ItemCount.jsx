import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = ({item}) =>{
    
    const [contador, setContador] = useState(1);
    
    const restarUno = () =>{

        if (contador <= 1) {
            alert("No se puede comprar menos de una unidad")
        } else {
            setContador(contador - 1)            
        }

    };

    const sumarUno = () =>{

        if (contador >= item.stock) {
            alert("No hay más stock")
        } else {
            setContador(contador + 1)
        }

    };

    return(
        <div className="item" id={"producto-" + item.id}>
            <img src={item.img} alt="fotoEjemplo" />
            <h5>{item.titulo}</h5>
            <div className="contador-items">
                <button onClick={restarUno}>-</button>
                <p>{contador}</p>
                <button onClick={sumarUno}>+</button>
            </div>
            <button className="agregar-carrito">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;