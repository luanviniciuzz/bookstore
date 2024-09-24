import React from "react"
import {Container, Nav, Navbar} from 'react-bootstrap';
import { FaShoppingCart, FaUser } from "react-icons/fa";
function Header() {


  return (
    <header>
       <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand className="text-white" href="/">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-white"  href="/cart"><FaShoppingCart/> Cart</Nav.Link>
              <Nav.Link className="text-white"  href="/login"><FaUser /> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header