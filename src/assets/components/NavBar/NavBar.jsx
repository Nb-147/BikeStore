import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Titulo } from "../Titulo/Titulos";
import { CartWiget } from "../CartWiget/CartWiget";

export const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="fixed-top d-flex justify-content-between">
                <Navbar.Brand href="#home">
                    <img src={"./src/assets/icon/favicon.jpg"} alt="Logo de Bikestore" />
                </Navbar.Brand>
                <Titulo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <Nav.Link href="#cart">
                            5 <CartWiget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
