import React, {useContext} from "react";
import { CartContext } from "../../service/Cart-Context";
import { Link } from "react-router-dom";
import CarritoDisplay from "./CarritoDisplay";
import './CarritoContainer.css';

const CarritoContainer = () => {

    const {clearCart, cartItems, montoFinal,cantidadFinalItems} = useContext(CartContext);

    return(
        <div className="pagina-carrito">
            <h2>CARRITO</h2>
                {!cartItems.length ? (
                    <div className="display-carrito-vacio">
                        <h5>El carrito está vacío, nosotros te ayudamos...</h5>
                        <Link to="/">¡Vamos a llenar ese carro!</Link>
                        <img src="http://pa1.narvii.com/6125/cd9c4955b053b42bb2825715bfadea26ce2604bb_00.gif" alt="Panda millonario" />
                    </div>
                ):(
                    <div className="cuerpo-carrito">
                        <button onClick={clearCart} className="clear-cart">Vaciar carrito</button>
                        <div className="display-carrito">
                            {cartItems.map((item) => (
                                    <CarritoDisplay item={item} key={item.id}/>
                            ))}
                            <h5>Cantidad total: {cantidadFinalItems}</h5>                
                            <h5>Monto Final: $ {montoFinal()}</h5>
                            <Link to="/confirmandoCompra">Continuar compra</Link>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default CarritoContainer;