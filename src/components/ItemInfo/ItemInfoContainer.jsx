import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {productosArray} from "../../productos/productosArray.json";
import ItemInfo from "./ItemInfo";

const ItemInfoContainer= () => {

    const [displayItemInfo, setDisplayItemInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id: idParams} = useParams(); // Lee el enrutado y toma el id

    const getItemsInfo = () => {
        return new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(productosArray.find((item)=> item.id.toString() === idParams));
                setLoading(false);
            }, 2000);
        });
    }

    useEffect(() => {
        getItemsInfo().then((result) => setDisplayItemInfo(result)); //Llama la función y después en el display escribe el item 
        setLoading(true);
    }, [idParams]);

    return(!loading && <ItemInfo displayItemInfo={displayItemInfo}/>);
};

export default ItemInfoContainer;