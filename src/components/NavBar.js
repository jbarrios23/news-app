import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Noticias App</h1>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Inicio</Link>
                <Link to="/category/sport" className="navbar-link">Deportes</Link>
                <Link to="/category/technology" className="navbar-link">Tecnología</Link>
                <Link to="/category/entertainment" className="navbar-link">Entretenimiento</Link>
            </div>
        </nav>
    );
};

export default NavBar;
