import { Navbar, Nav } from "react-bootstrap";
import { CartWidget } from './CartWidget/CartWidget';
import { Titulo } from '../Titulo/Titulo';
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const categorys = [
    { to: '/', text: 'Inicio' },
    { to: '/category/BicicletasMTB', text: 'MTB' },
    { to: '/category/BicicletasRuta', text: 'Ruta' },
    { to: '/category/Herramientas', text: 'Herramientas' },
    { to: '/category/Equipos', text: 'Equipos' },
    { to: '/category/Ruedas', text: 'Ruedas' },
    { to: '/category/Cascos', text: 'Cascos' }
];


export const NavBar = ({ isLoggedIn, userName }) => {
    return (
        <div>
            <Navbar expand="lg" className="fixed-top d-flex justify-content-between">
                <div className="d-flex">
                    <Navbar.Brand>
                        <NavLink to='/'>
                            <img src={"/favicon.jpg"} alt="Logo de Bikestore" />
                        </NavLink>
                    </Navbar.Brand>
                    <Titulo />
                </div>

                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav>
                            {categorys.map(({ to, text }) => (
                                <NavLink key={to} className={({ isActive }) => isActive ? 'btn btn-dark links' : 'btn'} to={to}>{text}</NavLink>
                            ))}
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
                                <Link className="btn" to='/cart'><CartWidget /></Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};
