import React, { useContext } from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import HamburguerMenu from "../HamburgerMenu/HamburguerMenu";
import {categorias} from "../../productos/productosArray.json";
import {CartContext} from "../../service/Cart-Context";


const Navbar = () => {

    const desplegarLista = () => {

        const contenido5 = document.getElementById("lista5");
        const contenido4 = document.getElementById("lista4");
        const contenido3 = document.getElementById("lista3");
        const contenido2 = document.getElementById("lista2");
        const contenido1 = document.getElementById("lista1");

        if(contenido5.classList.contains("active")){
            contenido1.classList.toggle('active');
            contenido2.classList.toggle('active');
            contenido3.classList.toggle('active');
            contenido4.classList.toggle('active');
            contenido5.classList.toggle('active');
        }else{
            contenido1.classList.toggle('active');
            contenido2.classList.toggle('active');
            contenido3.classList.toggle('active');
            contenido4.classList.toggle('active');
            contenido5.classList.toggle('active');
        }

    }

    const {cantidadFinalItems} = useContext(CartContext);


    return (
        <nav className="barra-nav">
            <ul className="lista-plegable">
                <li className="nombre-tienda"><Link to="/">Mundo Otaku</Link></li>
                {categorias.map((cat) =>(
                    <li className="contenido-lista" id={`lista${cat.id}`}><Link to={`/productos/${cat.titulo}`}>{cat.titulo}</Link></li>
                ))}
                <li className="link-carro">
                    <Link to="/carrito">
                        <CartWidget/>
                    </Link>
                    {(cantidadFinalItems > 0) ? (
                        <div className="contador-items-carrito">
                            {cantidadFinalItems}
                        </div>
                    ):(<></>)}
                </li>
                <li className="toggle" onClick={desplegarLista}><HamburguerMenu/></li>
            </ul>
        </nav>
    );
};

export default Navbar;