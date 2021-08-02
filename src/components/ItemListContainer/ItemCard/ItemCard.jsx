import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return(
        <Link to={`/productos/${item.categoria}/${item.id}`}>
            <div className="item" id={"producto-" + item.id}>
                <div className="imagen-producto">
                    <img src={`/img/${item.img}`} alt={item.titulo} />
                </div>
                <div className="item-preview">
                    <h5>{item.titulo}</h5>
                    <p>{"$ "+item.precio}</p>
                </div>
            </div>
        </Link>
    );

};

export default ItemCard;