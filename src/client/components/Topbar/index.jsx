import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
// import SearchBox from './SearchBox';

require('styles/app.scss');
require('styles/top.scss');
const Logo = require('images/logo.png');


const TopHeader = () => (
  <Navbar className="header-container" collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><Image className="nav-brand-img" src={Logo} rounded />
          <span className="headerText">SAMORPAN</span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft />
    </Navbar.Collapse>
  </Navbar>
);
export default TopHeader;
