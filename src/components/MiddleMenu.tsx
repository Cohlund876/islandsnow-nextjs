'use client';

import { Nav, Navbar } from 'react-bootstrap';

const MiddleMenu = () => (
  <Navbar bg="white" expand="lg">

    <Nav className="mx-auto">
      <Nav.Link className="me-3">Men</Nav.Link>
      <Nav.Link className="me-3">Women</Nav.Link>
      <Nav.Link className="me-3">Kids</Nav.Link>
      <Nav.Link className="me-3">Brands</Nav.Link>
      <Nav.Link className="me-3">Search</Nav.Link>
    </Nav>
  </Navbar>
);

export default MiddleMenu;
