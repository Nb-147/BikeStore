import "./NavBar.css";

import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { CartWidget } from './CartWidget/CartWidget';
import { Titulo } from './../Titulo/Titulos';
import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            <Navbar expand="lg" className="fixed-top d-flex justify-content-between">

                <div className="d-flex">
                    <Navbar.Brand>
                        <NavLink to='/'><img src={"./src/assets/icon/favicon.jpg"} alt="Logo de Bikestore" /></NavLink>
                    </Navbar.Brand>
                    <Titulo />
                </div>

                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-dark links' : 'btn'} to='/'>Inicio</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-dark links' : 'btn'} to='/category/BicicletasMTB'> MTB</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-dark links' : 'btn'} to='/category/BicicletasRuta'> Ruta</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-dark links' : 'btn'} to='/category/Herramientas'>Herramientas</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-dark links' : 'btn'} to='/category/Equipos'>Equipos</NavLink>
                        </Nav>
                        <div>
                            <Nav>
                                {!isLoggedIn && (
                                    <NavLink className="btn links mt-2 sesion bi bi-person" to='/login' onClick={handleLogin}>👤Cuenta</NavLink>
                                )}
                                <Link className="btn" to='/cart'> <CartWidget /></Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};
