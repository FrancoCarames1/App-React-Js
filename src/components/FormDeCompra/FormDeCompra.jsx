import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { database } from "../../firebase/firebase";
import { CartContext } from "../../service/Cart-Context";
import CompraDisplay from "./CompraDisplay";
import "./FormDeCompra.css";
import { Link } from "react-router-dom";

const FormDeCompra = () => {

    const { cartItems, montoFinal, clearCart } = useContext(CartContext);
    const [ordenVacia, setOrdenVacia] = useState(false);

    useEffect(() => {
        if (cartItems.length === 0) {
            setOrdenVacia(false);
        } else {
            setOrdenVacia(true);
        }
    }, [cartItems])

    const submitDeCompra = (event) => {

        event.preventDefault();

        let nombreComprador = event.target.nombre.value;
        let mailComprador = event.target.mail.value;
        let direccionComprador = event.target.direccion.value;
        let objetoComprado = { nombre: nombreComprador, mail: mailComprador, direccion: direccionComprador, itemsComprados: cartItems, monto: montoFinal() };

        let ordenesDeProductos = database.collection("ordenes");
        ordenesDeProductos.add(objetoComprado).then(({ id }) => {
            alert('Anotar: \n Id de compra:' + id);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setTimeout(clearCart(), 5000)
        })
    }

    return (
        <>
            {ordenVacia ? (
                <>
                    <h2 className='titulo-formulario'>Formulario de compra</h2>
                    <form onSubmit={submitDeCompra}>
                        <label htmlFor="nombre">Nombre y Apellido:</label>
                        <input type="text" name="nombre" id="nombre" required />
                        <label htmlFor="mail">Mail:</label>
                        <input type="email" name="mail" id="mail" required />
                        <label htmlFor="direccion">Dirección:</label>
                        <input type="text" name="direccion" id="direccion" required />
                        <label>Carrito:</label>
                        {cartItems.map((item) => (
                            <CompraDisplay item={item} />
                        ))}
                        <label> Total: <b>${montoFinal()}</b></label>
                        <button type="submit">Enviar Pedido</button>
                    </form>
                </>
            ) : (
                <div className='contenedor-usuario-perdido'>
                    <h2 className="texto-perdido">Ops.... parece que llegaste acá con el carrito vacío, nosotros te ayudamos.</h2>
                    <Link to='/'>Clickeame</Link>
                    <img src="./img/anime-stare.gif" alt="anime peeking" className="chica-mirando" />
                </div>
            )}
        </>
    )
}

export default FormDeCompra;