import React from 'react';
import { Navbar, Nav, Container, NavLink } from "react-bootstrap"
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Deerwalk E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>
                                <i className="fas fa-shopping-cart"></i>
                                Cart
                            </Nav.Link>
                            <Nav.Link>
                                <i className="fas fa-user"></i>
                                Login
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>

    ); 
};

export default Header;
