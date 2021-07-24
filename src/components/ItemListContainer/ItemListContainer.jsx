import React, { useState , useEffect} from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import {productosArray} from "../../productos/productosArray.json";
import { useParams } from "react-router-dom";

const Bienvenida = () => {

    const [displayItems, setDisplayItems] = useState([]);

    const {activeCategory} = useParams();

    const getCategoryItems = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                if (activeCategory){
                    let productosFiltrados = productosArray.filter((item) => item.categoria.includes(activeCategory));
                    resolve(productosFiltrados);
                }else{
                    resolve(productosArray);
                }
            }, 2000);
        });
    }

    useEffect(()=>{
        getCategoryItems().then((result) => setDisplayItems(result));
    }, [activeCategory]);

    return(
        <div className="productos">
            <ItemList displayItems ={displayItems}/>
        </div>
    );
};

export default Bienvenida;