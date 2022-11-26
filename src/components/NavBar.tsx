import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar sticky="top" expand="large">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/newusers" className="nav-link">New Users</Link>
                        <Link to="/editusers" className="nav-link">Edit Users</Link>
                        <Link to="/newsletters" className="nav-link">Newsletters</Link>
                    </Nav>
                    </ Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;