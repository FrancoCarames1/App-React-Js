import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemInfo from "./ItemInfo";
import { database} from "../../firebase/firebase";
import Loader from "../Loader/Loader";


const ItemInfoContainer= () => {

    const {id: idParams} = useParams(); // Lee el enrutado y toma el id

    const [arrayConItem, setArrayConItem] = useState([]);

    const getItemsInfo = () => {
            
            database
                .collection("productos")
                .doc(idParams)
                .get().then((doc) => {
                    if (doc.exists) {
                        setArrayConItem([{...doc.data(), id: idParams}]);
    }})}

    useEffect(() => {
        getItemsInfo();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idParams]);

    return(<>{arrayConItem.length ? ( <ItemInfo displayItemInfo={arrayConItem[0]}/>):( <div className="cargando"><Loader/></div>)}</>);
};

export default ItemInfoContainer;