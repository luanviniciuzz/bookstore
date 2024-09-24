import React from "react"
import {Container, Nav, Navbar} from 'react-bootstrap';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

function Header() {


  return (
    <header>
       <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
              <Navbar.Brand className="text-white" href="/">Book Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <LinkContainer to='/cart'>
                <Nav.Link className="text-white"  href="/cart"><FaShoppingCart/> Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link className="text-white"  href="/login"><FaUser /> Login</Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header