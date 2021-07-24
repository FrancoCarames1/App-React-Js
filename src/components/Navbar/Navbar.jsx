import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import HamburguerMenu from "../HamburgerMenu/HamburguerMenu";

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

    return (
        <nav className="barra-nav">
            <ul className="lista-plegable">
                <li className="nombre-tienda"><Link to="/">Mundo Otaku</Link></li>
                <li className="contenido-lista" id="lista1"><Link to="/mangas">Mangas</Link></li>
                <li className="contenido-lista" id="lista2"><Link to="/indumentaria">Indumentaria</Link></li>
                <li className="contenido-lista" id="lista3"><Link to="/accesorios">Accesorios</Link></li>
                <li className="contenido-lista" id="lista4"><Link to="/decoraciones">Decoraciones</Link></li>
                <li className="contenido-lista" id="lista5"><Link to="/contacto">Contacto</Link></li>
                <li className="link-carro"><CartWidget/></li>
                <li className="toggle" onClick={desplegarLista}><HamburguerMenu/></li>
            </ul>
        </nav>
    );
};

export default Navbar;