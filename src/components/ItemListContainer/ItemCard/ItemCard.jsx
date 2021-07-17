import React, {useState} from "react";
import { Link } from "react-router-dom";
import './ItemCard.css';

const ItemCard = ({item}) => {

    return(
        <Link to={`/${item.categoria}/${item.id}`}>
            <div className="item" id={"producto-" + item.id}>
                <div className="imagen-producto">
                    <img src={require(`../../../assets/img/${item.img}`).default} alt={item.titulo} />
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