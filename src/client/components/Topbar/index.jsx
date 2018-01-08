import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
// import SearchBox from './SearchBox';

require('styles/app.scss');
require('styles/top.scss');
const Logo = require('images/logo.png');


const TopHeader = () => (
  <Navbar className="header-container" collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><Image className="nav-brand-img" src={Logo} rounded /></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/about">About</NavItem>
        <NavItem eventKey={3} href="/packages">Subscribe</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default TopHeader;
