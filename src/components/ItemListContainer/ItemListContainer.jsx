import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { database } from "../../firebase/firebase";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {

    const [productosArray, setProductosArray] = useState([]);

    const {categoria: activeCategory} = useParams();

    const obtenerProductos = () => {

        if (typeof activeCategory === 'undefined'){

            const productos = database
                .collection("productos");

            productos.get().then((query) => 

                setProductosArray(query.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })))

        }else{

            const productos = database
                .collection("productos")
                .where("categoria", "==", activeCategory);

            productos.get().then((query) => 

            setProductosArray(query.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
            
            )

        }
    }

    useEffect(() =>{
        obtenerProductos();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeCategory])

    return(
        <div className="productos">
            {productosArray.length ? (
                <ItemList displayItems ={productosArray}/>
            ) : (
                <Loader/>
            )}
        </div>
    );
};

export default ItemListContainer;