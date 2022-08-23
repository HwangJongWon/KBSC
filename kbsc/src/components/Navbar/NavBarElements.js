import React from 'react';
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const NavBarElements = () =>{
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{fontfamily:"main"}}>
      <Container>
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/FromText">from text to 수어</Nav.Link>
            <Nav.Link href="/ToText">from 수어 to text</Nav.Link>
            <NavDropdown title="learn 수어" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">테마별 학습하기</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                테마별 test
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/SignIn">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="/SignUp">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    );
};

export default NavBarElements;