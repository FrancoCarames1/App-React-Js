import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const DisplayCategoria = () => {

    return(
        <>
            <section className="bienvenida">
                <h2>OwO</h2>
                <h5>Esperamos que encuentres algo de tu gusto &#128521;</h5>
            </section>
            <section>
                <ItemListContainer/>
            </section>
        </>
    )

}

export default DisplayCategoria;