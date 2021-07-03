import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="barra-nav">
            <p className="nombre-tienda activa">Mundo Otaku</p>
            <ul className="lista-plegable">
                <li className="contenido-lista">Mangas</li>
                <li className="contenido-lista">Indumentaria</li>
                <li className="contenido-lista">Accesorios</li>
                <li className="contenido-lista">Decoraciones</li>
                <li className="contenido-lista">Contacto</li>
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default Navbar;