import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="rounded p-3">
      <Navbar className="rounded-3" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              Post
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <NavDropdown title="ADMIN" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="admin-post">
                  Post
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
