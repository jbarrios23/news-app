import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/category/sport">Deportes</Link>
        <Link to="/category/tecnology">Tecnologia</Link>
        <Link to="/category/entertainment">Entretenimiento</Link>
    </nav>
}

export default NavBar;