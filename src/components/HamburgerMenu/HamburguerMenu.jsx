import React from "react";
import "./HamburguerMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HamburguerMenu = () => {
    return(
        <FontAwesomeIcon icon={faBars}/>
    );
};

export default HamburguerMenu;