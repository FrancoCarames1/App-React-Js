import React, { useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

const Bienvenida = (props) => {

    const [displayItems, setDisplayItems] = useState([])

    const productosArray = [
        {
            id: 1,
            titulo: "Póster de Luffy (Wanted)",
            img: "https://www.teahub.io/photos/full/146-1463938_one-piece-wanted.jpg",
            stock: 5,
            precio: 800,
            categoria: "accesorio",
            compraMin: 1
        },
        {
            id: 2,
            titulo: "Buzo Nubes de akatsuki",
            img: "https://http2.mlstatic.com/D_NQ_NP_881347-MLA45392507786_032021-O.jpg",
            stock: 10,
            precio: 5000,
            categoria: "indumentaria",
            compraMin: 1
        },
        {
            id: 3,
            titulo: "Bandana de naruto",
            img: "https://morondangabcn.com/wp-content/uploads/2021/02/COSPLAY-NARUTO-BANDANA-CABEZA.jpg",
            stock: 15,
            precio: 600,
            categoria: "indumentaria",
            compraMin: 1
        }
    ];

    const getItems = () => {
        return new Promise ((resolve, reject) => {
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