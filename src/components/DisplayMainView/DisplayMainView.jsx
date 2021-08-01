import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const DisplayMainView = () => {

    return(
        <>
            <section className="bienvenida">
                <h2>いらっしゃいませ！ - Irasshaimase! - ¡Bienvenido!</h2>
                <h5>Esperamos que encuentres algo de tu gusto &#128521;</h5>
            </section>
            <section>
                <ItemListContainer />
            </section>
        </>
    )

}

export default DisplayMainView;