import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import {productosArray} from "../../productos/productosArray.json";

const Bienvenida = (props) => {

    const [displayItems, setDisplayItems] = useState([])

    const getItems = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productosArray);
            }, 2000);
        });
    }

    getItems().then((result) => setDisplayItems(result));

    return(
        <div className="productos">
            <ItemList displayItems ={displayItems}/>
        </div>
    );
};

export default Bienvenida;