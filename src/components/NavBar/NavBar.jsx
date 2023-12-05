import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { CartWidget } from './CartWidget/CartWidget';
import { Titulo } from '../Titulo/Titulo';
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

export const NavBar = ({ isLoggedIn, userName }) => {
    return (
        <div>
            <Navbar expand="lg" className="fixed-top d-flex justify-content-between">
                <div className="d-flex">
                    <Navbar.Brand>
                        <NavLink to='/'><img src={"/favicon.jpg"} alt="Logo de Bikestore" /></NavLink>
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
                                {!isLoggedIn ? (
                                    <NavLink className="btn sesion" to='/login'>👤Mi Cuenta</NavLink>
                                ) : (
                                    <div className="logged-in-user">
                                        <p className="text-danger">¡Bienvenido, {userName}!</p>
                                    </div>
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