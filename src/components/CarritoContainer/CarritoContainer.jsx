import React, {useContext} from "react";
import { CartContext } from "../../service/Cart-Context";
import { Link } from "react-router-dom";
import CarritoDisplay from "./CarritoDisplay";

const CarritoContainer = () => {

    const {deleteCartItem, clearCart, cartItems, montoFinal,cantidadFinalItems} = useContext(CartContext);

    return(
        <>
            {!cartItems.length ? (
                <>
                    <h5>El carrito está vacío, nosotros te ayudamos...</h5>
                    <Link to="/">¡Vamos a llenar ese carro!</Link>
                </>
            ):(
                <>
                    {cartItems.map((item) => (
                            <CarritoDisplay item={item} key={item.id}/>
                    ))}
                    <h5>Monto Final: {montoFinal()}</h5>
                    <h5>Cantidad total: {cantidadFinalItems}</h5>                
                </>
            )}
        </>
    );
};

export default CarritoContainer;