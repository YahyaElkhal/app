import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/add">Add Product</Link>
            <Link to="/login">Login page</Link>
            <Link to="/register">Register page</Link>
            <Link to="/update">Update Product</Link>
            
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Header;

