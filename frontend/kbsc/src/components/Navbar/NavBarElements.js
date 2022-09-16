import React from 'react';
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


const NavBarElements = () =>{
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{fontfamily:"main"}}>
      <Container>
        <Navbar.Brand href="/" style={{fontFamily:'logo',fontSize:'30px'}}>수어지교</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/FromText">&nbsp; &nbsp; &nbsp;한국어로 검색</Nav.Link>
            <Nav.Link href="/ToText"> &nbsp; &nbsp; &nbsp;수어로 검색</Nav.Link>
            <NavDropdown title=" &nbsp; &nbsp; &nbsp;수어 학습하기" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">테마별 학습하기</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                테마별 test
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/SignIn"> &nbsp; &nbsp; &nbsp;로그인</Nav.Link>
            <Nav.Link eventKey={2} href="/SignUp">
            &nbsp; &nbsp; &nbsp; 회원가입
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    );
};

export default NavBarElements;