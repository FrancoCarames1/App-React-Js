import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemInfo from "./ItemInfo";
import { database} from "../../firebase/firebase";


const ItemInfoContainer= () => {

    const {id: idParams} = useParams(); // Lee el enrutado y toma el id

    const [arrayConItem, setArrayConItem] = useState([]);

    const getItemsInfo = () => {

            const productos = database
                .collection("productos")
                .doc(idParams)
                .get().then((doc) => {
                    if (doc.exists) {
                        setArrayConItem([doc.data()]);
    }})}

    useEffect(() => {
        getItemsInfo();
        console.log(arrayConItem)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idParams]);

    return(<>{arrayConItem.length ? ( <ItemInfo displayItemInfo={arrayConItem[0]}/>):( <h3>Loading...</h3>)}</>);
};

export default ItemInfoContainer;