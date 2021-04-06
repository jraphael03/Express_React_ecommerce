import React from 'react'
import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
      <header>
        <Navbar
          className="Navbar"
          bg="dark"
          variant="dark"
          expand="lg"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand href="/">OneStopShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/cart"><i className="fas fa-shopping-cart mr-1"></i>  Cart</Nav.Link>
                <Nav.Link href="login"><i className="fas fa-user mr-1"></i>  Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header
