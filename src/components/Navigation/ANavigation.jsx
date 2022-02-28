import React from 'react';
import './ANavigation.css';
import { Container , Navbar , NavDropdown , Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ANavigation = () =>{
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <NavLink to="/" className="ap__nav_bar_brand">Graph Project</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Graph" id="basic-nav-dropdown">
                <NavLink to="/linechart" className="ap__navlink_item">Line Graph</NavLink>
                <NavLink to="/barchart" className="ap__navlink_item">Bar Graph</NavLink>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default ANavigation;