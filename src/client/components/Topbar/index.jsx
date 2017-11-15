import React from 'react';
import { Row } from 'react-bootstrap';
import CarrefourLogo from 'images/logo.jpg';
import SearchBox from './SearchBox';

require('styles/app.scss');

const TopHeader = () => (
  <Row className="TopBar">
    <img src={CarrefourLogo} alt="logo" />
    <SearchBox />
  </Row>
);
export default TopHeader;
