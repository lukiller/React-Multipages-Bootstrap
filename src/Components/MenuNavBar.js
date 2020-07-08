import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./MenuNavBar.css";

export default function MenuNavBar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/page1">Pagina1</Nav.Link>
          <Nav.Link href="/page2">Pagina2</Nav.Link>
          <NavDropdown title="Administracion" id="basic-nav-dropdown">
            <NavDropdown.Item href="/page1">Pagina1</NavDropdown.Item>
            <NavDropdown.Item href="/page2">Pagina2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/page1">Pagina3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Texto a buscar..."
            className="mr-sm-2"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
