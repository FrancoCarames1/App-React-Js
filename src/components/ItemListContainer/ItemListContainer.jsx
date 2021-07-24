import React, { useState , useEffect} from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import {productosArray} from "../../productos/productosArray.json";
import { useParams } from "react-router-dom";

const Bienvenida = (props) => {

    const [displayItems, setDisplayItems] = useState([]);

    const {activeCategory} = useParams();

    const getCategoryItems = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                if (activeCategory){
                    let productosFiltrados = productosArray.filter((item) => item.categoria === activeCategory);
                    resolve(productosFiltrados);
                }else{
                    resolve(productosArray);
                }
                console.log(activeCategory)
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