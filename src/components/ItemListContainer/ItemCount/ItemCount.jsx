import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = (props) =>{
    
    const [contador, setContador] = useState(1);
    
    const restarUno = () =>{

        if (contador <= 1) {
            alert("No se puede comprar menos de una unidad")
        } else {
            setContador(contador - 1)            
        }

    };

    const sumarUno = () =>{

        if (contador >= 5) {
            alert("No hay más stock")
        } else {
            setContador(contador + 1)
        }

    };

    return(
        <div className="item">
            <img src="https://www.teahub.io/photos/full/146-1463938_one-piece-wanted.jpg" alt="fotoEjemplo" />
            <h5>{props.nombreItem}</h5>
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