import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from 'images/logo.jpg';
// import SearchBox from './SearchBox';

require('styles/app.scss');
require('styles/top.scss');
// const Logo = require('images/logo.png');


const TopHeader = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img src={logo} alt="logo" /></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Subscribe</NavItem>
        <NavItem eventKey={4} href="#">Contact</NavItem>
        <NavItem eventKey={5} href="#">Sign In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default TopHeader;
