import React from 'react'
import { Navbar, NavItem, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div>
                <Navbar className="navigation" bg="transparent" expand="lg">
                    <Navbar.Brand as={Link} to="/"><span className="navbar-brand">COVID-19 <span className="us-brand">U.S.</span></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"> <i className="menu-icon fas fa-chevron-circle-down"></i> </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/totals" >Totals</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/cases" >Cases</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/deaths" >Deaths</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/new-cases" >New Cases</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/new-deaths" >New Deaths</Nav.Link>
                        </NavItem>
                        <NavItem eventkey={1}>
                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>  
    )
}
