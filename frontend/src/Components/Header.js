import React from 'react';
import { Navbar, Nav, Container, NavLink } from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    
                    <LinkContainer to="/">
                        <Navbar.Brand>Deerwalk E-Commerce</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            
                           <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user"></i>
                                    Login
                                </Nav.Link>
                           </LinkContainer>

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>

    ); 
};

export default Header;
