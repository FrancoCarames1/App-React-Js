import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { database } from "../../firebase/firebase";
import { useEffect } from "react";

const ItemListContainer = () => {

    const [productosArray, setProductosArray] = useState([]);

    const {categoria: activeCategory} = useParams();

    console.log(activeCategory)

    const obtenerProductos = () => {

        console.log(typeof activeCategory);

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
                <h3>Loading...</h3>
            )}
        </div>
    );
};

export default ItemListContainer;