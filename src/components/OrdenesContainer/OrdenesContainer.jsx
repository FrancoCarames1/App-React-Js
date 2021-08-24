import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import OrdenInfo from "./OrdenInfo";
import { database} from "../../firebase/firebase";
import Loader from "../Loader/Loader";
import './OrdenesContainer.css'

const OrdenesContainer= () => {

    const {id: idParams} = useParams();

    const [arrayConOrden, setArrayConOrden] = useState([]);

    const getOrdenesInfo = () => {
            
            const ordenes = database
                .collection("ordenes")
                .doc(idParams)
                .get().then((doc) => {
                    if (doc.exists) {
                        setArrayConOrden([{...doc.data(), id: idParams}]);
    }})}

    useEffect(() => {
        getOrdenesInfo();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idParams]);

    return(<>{arrayConOrden.length ? (
    <>
    <OrdenInfo displayOrdenInfo={arrayConOrden[0]}/>
    <img src="https://64.media.tumblr.com/a851eaf6ccbfde5fb7e8e9e43721cc55/cdd50415482062c7-b4/s540x810/c90cf2b9e377883fcaed746290abdf6e5e2a5bb9.gifv" alt="dancing tendou" className='gif-dancing'/>
    </>
    ):( <div className="cargando"><Loader/></div>)}</>);
};

export default OrdenesContainer;