import React, { useContext } from "react";
import { database } from "../../firebase/firebase";
import { CartContext } from "../../service/Cart-Context";
import CompraDisplay from "./CompraDisplay";

const FormDeCompra = () =>{

    const {cartItems, montoFinal, clearCart} = useContext(CartContext);

    const submitDeCompra = (event) => {

        event.preventDefault();

        let nombreComprador = event.target.nombre.value;
        let mailComprador = event.target.mail.value;
        let direccionComprador = event.target.direccion.value;
        let objetoComprado = { nombre: nombreComprador, mail: mailComprador, direccion: direccionComprador, itemsComprados: cartItems, monto: montoFinal() };

        let ordenesDeProductos = database.collection("ordenes");
        ordenesDeProductos.add(objetoComprado).then(({id}) => {
            console.log(id)
        }).catch(err => {
            console.log(err)
        }).finally(()=>{
            clearCart()
        })
    }

    return (
    <form onSubmit={submitDeCompra}>
        <label htmlFor="nombre">Nombre y Apellido:</label>
        <input type="text" name="nombre" id="nombre" required/>
        <label htmlFor="mail">Mail:</label>
        <input type="email" name="mail" id="mail" required/>
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" name="direccion" id="direccion" required/>
        {cartItems.map((item) => (
            <CompraDisplay item={item}/>
        ))}
        <button type="submit">Enviar Pedido</button>
    </form>
    )
}

export default FormDeCompra;