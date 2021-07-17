import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

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
                
                <li className="contenido-lista" id="lista1">Mangas</li>
                <li className="contenido-lista" id="lista2">Indumentaria</li>
                <li className="contenido-lista" id="lista3">Accesorios</li>
                <li className="contenido-lista" id="lista4">Decoraciones</li>
                <li className="contenido-lista" id="lista5">Contacto</li>
                <li className="link-carro"><CartWidget/></li>
                <li className="toggle" onClick={desplegarLista}><span className="barras"></span></li>
            </ul>
        </nav>
    );
};

export default Navbar;