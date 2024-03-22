import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container className='container m-0'>
        {/* Logo */}
        <Navbar.Brand>
          <img className='sole' src="/sole.png" alt="img" />
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* Home */}
            <Nav.Link className='fs-5 me-3 fw-bold text-dark'>Home</Nav.Link>

            {/* Other Links */}
            <Nav.Link className='fs-5 me-2 text-dark'>Previsioni</Nav.Link>
            <Nav.Link className='fs-5 me-2 text-dark'>Maree</Nav.Link>
            <Nav.Link className='fs-5 text-dark'>Contatti</Nav.Link>
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
