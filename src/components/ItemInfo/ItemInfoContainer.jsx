import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {productosArray} from "../../productos/productosArray.json";
import ItemInfo from "./ItemInfo";

const ItemInfoContainer= () => {

    const [displayItemInfo, setDisplayItemInfo] = useState([])

    const {id: idParams} = useParams(); // Lee el enrutado y toma el id

    const getItemsInfo = () => {
        return new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(productosArray.find((item)=> item.id.toString() === idParams));
            }, 2000);
        });
    }

    useEffect(() => {
        getItemsInfo().then((result) => setDisplayItemInfo(result)); //Llama la función y después en el display escribe el item 
    }, [idParams]);

    return(<ItemInfo displayItemInfo={displayItemInfo}/>);
};

export default ItemInfoContainer;